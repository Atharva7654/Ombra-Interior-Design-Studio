"use server";

import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { projectTypes, site } from "@/lib/content";

export type EnquiryField = "name" | "email" | "phone" | "projectType" | "message";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  name?: string;
  errors?: Partial<Record<EnquiryField, string>>;
  values?: Partial<Record<EnquiryField, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\d\s.-]{6,40}$/;

export async function submitEnquiry(_previous: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const read = (key: string) => String(formData.get(key) ?? "").trim();

  const values = {
    name: read("name"),
    email: read("email"),
    phone: read("phone"),
    projectType: read("projectType"),
    message: read("message"),
  };

  // Honeypot: real visitors never see or fill this field.
  if (read("company")) {
    return { status: "success", name: values.name };
  }

  const errors: Partial<Record<EnquiryField, string>> = {};

  if (values.name.length < 2) errors.name = "Please tell us your name.";
  else if (values.name.length > 120) errors.name = "Please keep your name under 120 characters.";

  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 200) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Please enter a valid phone number, or leave it blank.";
  }

  if (!(projectTypes as readonly string[]).includes(values.projectType)) {
    errors.projectType = "Please choose the kind of project.";
  }

  if (values.message.length < 20) {
    errors.message = "Please share a little more about your project (at least 20 characters).";
  } else if (values.message.length > 4000) {
    errors.message = "Please keep your message under 4,000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields and try again.", errors, values };
  }

  try {
    await db.insert(enquiries).values({
      name: values.name,
      email: values.email.toLowerCase(),
      phone: values.phone || null,
      projectType: values.projectType,
      message: values.message,
    });
  } catch (error) {
    console.error("[enquiry] failed to store submission", error);
    return {
      status: "error",
      message: `We couldn't send your enquiry just now. Please try again in a moment, or email us at ${site.email}.`,
      values,
    };
  }

  return { status: "success", name: values.name };
}

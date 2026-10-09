"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, type ReactNode } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { Button, ButtonLink } from "@/components/ui/primitives";
import { projectTypes } from "@/lib/content";
import { submitEnquiry, type EnquiryField, type EnquiryState } from "./actions";

const initialState: EnquiryState = { status: "idle" };

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: EnquiryField;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label label">
        {label} {optional ? <span className="field__optional">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="field__error t-small">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Success({ name }: { name?: string }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstName = name?.split(" ")[0];

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="form__success" role="status" aria-live="polite">
      <span className="form__success-mark" aria-hidden="true">
        <CheckIcon />
      </span>
      <h2 ref={headingRef} tabIndex={-1} className="t-h5 outline-none">
        Thank you{firstName ? `, ${firstName}` : ""}.
      </h2>
      <p className="t-body max-w-[30rem] text-ink-soft">
        Your enquiry is with the studio. A designer will reply within two working days, usually with a few
        questions and some times for an introductory call.
      </p>
      <ButtonLink href="/#projects" variant="dark">
        Browse Projects
      </ButtonLink>
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") return <Success name={state.name} />;

  const errors = state.errors ?? {};
  const values = state.values ?? {};
  const describedBy = (field: EnquiryField) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form action={formAction} className="form" noValidate aria-describedby="form-note">
      {state.status === "error" && state.message ? (
        <div className="form__alert t-small" role="alert">
          {state.message}
        </div>
      ) : null}

      <div className="form__row">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            defaultValue={values.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className="field__input"
            placeholder="Your name"
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={200}
            defaultValue={values.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className="field__input"
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field id="phone" label="Phone" optional error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          maxLength={40}
          defaultValue={values.phone}
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={describedBy("phone")}
          className="field__input"
          placeholder="+45 …"
        />
      </Field>

      <fieldset className="field" aria-describedby={describedBy("projectType")}>
        <legend className="field__label label mb-2">Type of project</legend>
        <div className="chips">
          {projectTypes.map((type) => (
            <label key={type} className="chip">
              <input
                type="radio"
                name="projectType"
                value={type}
                required
                defaultChecked={values.projectType === type}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        {errors.projectType ? (
          <p id="projectType-error" className="field__error t-small">
            {errors.projectType}
          </p>
        ) : null}
      </fieldset>

      <Field id="message" label="About your project" error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={4000}
          defaultValue={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className="field__input"
          placeholder="The rooms involved, rough timing, and anything you already love or want to change."
        />
      </Field>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__footer">
        <p id="form-note" className="form__note t-small">
          We only use these details to reply to your enquiry. See our{" "}
          <Link href="/privacy">privacy policy</Link>.
        </p>
        <Button type="submit" variant="dark" disabled={pending} aria-busy={pending}>
          {pending ? "Sending…" : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}

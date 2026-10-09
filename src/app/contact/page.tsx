import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { site } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell Ombra Interior Studio about your home or renovation. A designer will reply within two working days.",
  alternates: { canonical: "/contact" },
};

const steps = [
  "A designer reads your note and replies within two working days.",
  "We arrange a free 30-minute call to understand the rooms and your budget.",
  "You receive a written proposal with scope, fees and a realistic timeline.",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Start a Project"
        title="Tell us about the rooms you want to come home to"
        lead="Share a few details about your home and what you have in mind. Every enquiry is read by a designer, never an inbox bot."
      />

      <section className="contact" aria-label="Project enquiry">
        <div className="gutter">
          <div className="container">
            <div className="contact__inner">
              <aside className="contact__aside">
                <div className="contact__block">
                  <p className="label">Email</p>
                  <a href={`mailto:${site.email}`} className="t-medium break-all">
                    {site.email}
                  </a>
                </div>
                <div className="contact__block">
                  <p className="label">Studio</p>
                  <p className="t-medium m-0">{site.location}</p>
                  <p className="t-small text-ink-soft">Studio visits by appointment</p>
                </div>
                <div className="contact__block">
                  <p className="label">Hours</p>
                  <p className="t-medium m-0">{site.hours}</p>
                </div>
                <div className="contact__block">
                  <p className="label">What happens next</p>
                  <ol className="contact__steps">
                    {steps.map((step, index) => (
                      <li key={step}>
                        <span className="services__num">{String(index + 1).padStart(2, "0")}</span>
                        <span className="t-tight">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>

              <div className="form-card">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

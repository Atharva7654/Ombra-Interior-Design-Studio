import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the Ombra Interior Studio website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Terms of use"
        lead="The simple ground rules for using this website."
      />
      <section className="legal">
        <div className="gutter">
          <div className="container">
            <div className="legal__body">
              <p className="label text-ink-soft">Last updated: January 2026</p>

              <h2>About this website</h2>
              <p>
                This website is provided by {site.legalName} to introduce our studio, our services and our
                work. The information here is general and may change as our services evolve.
              </p>

              <h2>Enquiries</h2>
              <p>
                Sending an enquiry does not create an agreement between us. Any design work is confirmed
                separately in a written proposal that sets out scope, fees and timing.
              </p>

              <h2>Content and imagery</h2>
              <p>
                The text, photography and design of this website belong to {site.legalName}. Please ask before
                reusing any of it beyond sharing a link.
              </p>

              <h2>Availability</h2>
              <p>
                We do our best to keep the website accurate and available, but it is provided as it is and we
                cannot guarantee it will always be uninterrupted or error-free.
              </p>

              <h2>Questions</h2>
              <p>
                If anything here is unclear, email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

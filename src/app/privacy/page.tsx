import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ombra Interior Studio handles the personal details you share through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy policy"
        lead="A plain-language summary of what we collect through this website and why."
      />
      <section className="legal">
        <div className="gutter">
          <div className="container">
            <div className="legal__body">
              <p className="label text-ink-soft">Last updated: January 2026</p>

              <h2>Who we are</h2>
              <p>
                This website is operated by {site.legalName}, based in {site.location}. You can reach us about
                anything on this page at <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>

              <h2>What we collect</h2>
              <p>We only collect the details you choose to send us through the enquiry form:</p>
              <ul>
                <li>your name and email address;</li>
                <li>your phone number, if you decide to share it;</li>
                <li>the type of project and the message you write.</li>
              </ul>

              <h2>How we use it</h2>
              <p>
                We use these details to reply to your enquiry and, if we go on to work together, to plan and
                manage your project. We do not sell your information or use it for advertising.
              </p>

              <h2>Cookies and analytics</h2>
              <p>
                This website does not set advertising or tracking cookies and does not use third-party
                analytics.
              </p>

              <h2>How long we keep it</h2>
              <p>
                We keep enquiry details only for as long as we need them to respond and follow up. You can ask
                us to delete them at any time.
              </p>

              <h2>Your rights</h2>
              <p>
                You can ask to see, correct or delete the personal information we hold about you by emailing{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>. If you are in the EU or EEA you also have
                the right to lodge a complaint with your data protection authority — in Denmark, that is
                Datatilsynet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

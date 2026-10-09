import type { Metadata } from "next";
import {
  About,
  Cta,
  Hero,
  Impact,
  Journal,
  Projects,
  Services,
} from "@/components/sections";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  description: site.description,
  url: site.url,
  email: site.email,
  foundingDate: site.founded,
  areaServed: "India",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Impact />
      <Journal />
      <Cta />
    </>
  );
}

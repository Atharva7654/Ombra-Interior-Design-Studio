import type { Metadata } from "next";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="gutter w-full">
        <div className="container">
          <div className="not-found__inner">
            <Eyebrow tone="glass">Error 404</Eyebrow>
            <h1 className="t-h1 max-w-[46rem]">This room hasn&apos;t been designed yet</h1>
            <p className="t-body max-w-[30rem] text-white/80">
              The page you were looking for has moved or never existed. Let&apos;s take you somewhere calmer.
            </p>
            <ButtonLink href="/">Back to Home</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

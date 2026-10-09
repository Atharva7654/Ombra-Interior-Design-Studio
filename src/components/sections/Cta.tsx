import Image from "next/image";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";
import { images } from "@/lib/content";

export function Cta() {
  return (
    <section id="contact" className="cta" aria-labelledby="cta-title">
      <div className="cta__bg" aria-hidden="true">
        <Image src={images.loungeLamp.src} alt="" fill sizes="100vw" style={{ objectPosition: "72% 62%" }} />
      </div>

      <div className="gutter">
        <div className="container">
          <div className="cta__inner" data-reveal-group="scroll">
            <div className="cta__heading">
              <div data-reveal="rise">
                <Eyebrow tone="glass">Start a Project</Eyebrow>
              </div>
              <h2 id="cta-title" className="cta__title t-h2" data-reveal="lines" data-reveal-at="0.09">
                Tell us about your home, and let&apos;s shape the rooms you&apos;ll{" "}
                <span className="nowrap">come home to</span>
              </h2>
            </div>
            <div data-reveal="rise" data-reveal-at="0.18">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

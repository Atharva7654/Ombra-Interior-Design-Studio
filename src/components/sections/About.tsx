import Image from "next/image";
import { Eyebrow } from "@/components/ui/primitives";
import { marqueeImages, site } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="gutter">
        <div className="container">
          <div className="about__inner">
            <div className="about__head" data-reveal-group="scroll">
              <div className="about__intro">
                <div data-reveal="rise">
                  <Eyebrow>The Studio</Eyebrow>
                </div>
                <h2 id="about-title" className="about__title t-h6" data-reveal="lines" data-reveal-at="0.09">
                  Ombra is an independent interior studio crafting calm, lasting homes.
                </h2>
              </div>
              <div className="about__meta t-body" data-reveal="rise" data-reveal-at="0.18">
                <span>Est. {site.founded}</span>
                <span className="about__rule" aria-hidden="true" />
                <span>Interior Studio, Mumbai</span>
              </div>
            </div>

            <div
              className="marquee"
              role="group"
              aria-label="Interiors from the studio"
              data-reveal-group="scroll"
              data-reveal="fade"
            >
              <div className="marquee__track">
                {[0, 1, 2].map((group) => (
                  <div key={group} className="marquee__group" aria-hidden={group > 0 ? true : undefined}>
                    {marqueeImages.map((image) => (
                      <div key={`${group}-${image.src}`} className="marquee__item">
                        {/* Tiles slide in from a clipped region, where native lazy-loading never
                            triggers early — load eagerly at low priority so none arrive blank. */}
                        <Image
                          src={image.src}
                          alt={group > 0 ? "" : image.alt}
                          fill
                          loading="eager"
                          fetchPriority="low"
                          sizes="(max-width: 991px) 352px, 440px"
                          style={{ objectPosition: image.focus }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

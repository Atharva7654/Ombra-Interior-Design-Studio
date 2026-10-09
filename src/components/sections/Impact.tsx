import Image from "next/image";
import { Eyebrow } from "@/components/ui/primitives";
import { images, impactStats } from "@/lib/content";

export function Impact() {
  return (
    <section id="impact" className="impact" aria-labelledby="impact-title">
      <div className="gutter">
        <div className="container">
          <div className="impact__inner">
            <div className="impact__head" data-reveal-group="scroll">
              <div data-reveal="rise">
                <Eyebrow>Our Impact</Eyebrow>
              </div>
              <h2 id="impact-title" className="impact__title t-display" data-reveal="lines" data-reveal-at="0.09">
                Twelve years of patient craft, close collaboration and rooms that still feel right long
                after we leave.
              </h2>
            </div>

            <div className="impact__body">
              <div className="impact__stats" data-reveal-group="scroll" data-reveal="stagger">
                {impactStats.map((stat) => (
                  <div key={stat.text} className="impact__stat">
                    <p className="impact__value m-0">
                      <span className="t-display">{stat.value}</span>
                      <span className="t-large">{stat.suffix}</span>
                    </p>
                    <p className="impact__text t-tight">{stat.text}</p>
                  </div>
                ))}
              </div>

              <div className="impact__figure" data-reveal-group="scroll" data-reveal="mask">
                <div className="mask">
                  <div className="mask__inner">
                    <Image
                      src={images.diningPanorama.src}
                      alt={images.diningPanorama.alt}
                      fill
                      sizes="(max-width: 1272px) 94vw, 1224px"
                      style={{ objectPosition: images.diningPanorama.focus }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ButtonLink, Eyebrow } from "@/components/ui/primitives";
import { ServicesExplorer } from "./ServicesExplorer";

export function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="gutter">
        <div className="container">
          <div className="services__inner">
            <div className="services__head" data-reveal-group="scroll">
              <div className="services__intro">
                <div data-reveal="rise">
                  <Eyebrow>Expertise</Eyebrow>
                </div>
                <h2 id="services-title" className="services__title t-h3" data-reveal="lines" data-reveal-at="0.09">
                  What we bring to every room
                </h2>
              </div>
              <div data-reveal="rise" data-reveal-at="0.18">
                <ButtonLink href="/#projects" variant="dark">
                  View Projects
                </ButtonLink>
              </div>
            </div>

            <ServicesExplorer />
          </div>
        </div>
      </div>
    </section>
  );
}

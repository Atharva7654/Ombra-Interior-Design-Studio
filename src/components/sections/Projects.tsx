import { ProjectCard } from "@/components/ui/cards";
import { Eyebrow } from "@/components/ui/primitives";
import { projects } from "@/lib/content";

const placements = ["projects__card--left", "projects__card--right", "projects__card--center"];

/**
 * A tall dark stage: the heading stays pinned in the viewport centre while
 * glass project cards drift past it at staggered offsets, blurring it as they cross.
 */
export function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="gutter">
        <div className="container">
          <div className="projects__inner">
            <div className="projects__heading" data-reveal-group="scroll">
              <div data-reveal="rise">
                <Eyebrow tone="glass">Selected Work</Eyebrow>
              </div>
              <h2 id="projects-title" className="projects__title t-h2" data-reveal="lines" data-reveal-at="0.09">
                Spaces made to slow down
              </h2>
            </div>

            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                className={`projects__card ${placements[index]}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

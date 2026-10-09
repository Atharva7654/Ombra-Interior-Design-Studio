import Image from "next/image";
import Link from "next/link";
import type { Article, Project } from "@/lib/content";
import { ArrowUpRight } from "./icons";
import { cx } from "./primitives";

export function ProjectCard({
  project,
  size = "regular",
  className,
  headingLevel = "h3",
  sizes = "(max-width: 767px) 92vw, (max-width: 991px) 45vw, 344px",
  priority = false,
}: {
  project: Project;
  size?: "regular" | "small";
  className?: string;
  headingLevel?: "h2" | "h3" | "p";
  sizes?: string;
  priority?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <Link
      href="/contact"
      className={cx("pcard", size === "small" && "pcard--small", className)}
      aria-label={`${project.title}, ${project.location} — enquire about a similar project`}
    >
      <div className="pcard__media">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectPosition: project.image.focus }}
        />
      </div>
      <div className="pcard__footer">
        <div className="pcard__text">
          <Heading className="pcard__title t-medium">{project.title}</Heading>
          <p className="pcard__location t-small">{project.location}</p>
        </div>
        <span className="arrow-tile" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}

export function JournalCard({ article, sizes }: { article: Article; sizes?: string }) {
  return (
    <Link href={`/journal/${article.slug}`} className="jcard">
      <div className="jcard__media">
        <div className="jcard__frame">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes={sizes ?? "(max-width: 767px) 92vw, (max-width: 991px) 92vw, 470px"}
            style={{ objectPosition: article.image.focus }}
          />
        </div>
        <div className="jcard__scrim" />
      </div>
      <div className="jcard__top">
        <span className="jcard__date">
          <time className="label text-white" dateTime={article.isoDate}>
            {article.date}
          </time>
        </span>
        <span className="arrow-tile jcard__arrow" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
      <h3 className="jcard__title t-h5">{article.title}</h3>
    </Link>
  );
}

import Image from "next/image";
import type { CSSProperties } from "react";
import { ProjectCard } from "@/components/ui/cards";
import { ButtonLink } from "@/components/ui/primitives";
import { featuredProject, heroStats, heroVideo } from "@/lib/content";
import { HeroVideo } from "./HeroVideo";

/** Stagger offsets for the CSS-driven load sequence (mirrors nav → eyebrow → lines → lead → CTA → stats → card). */
const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

const titleLines = ["Calm interiors,", "composed with care"];

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg">
        <div className="hero__media">
          <Image
            src={heroVideo.poster}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: "50% 50%" }}
          />
          <HeroVideo sources={heroVideo.sources} poster={heroVideo.poster} />
        </div>
        <div className="hero__scrim" />
      </div>

      <div className="gutter">
        <div className="hero__inner">
          <div className="hero__intro">
            <div className="hero__heading">
              <p className="hero__eyebrow label load-rise" style={delay(0.15)}>
                Ombra — Interiors in Quiet Light
              </p>
              <h1 id="hero-title" className="hero__title t-h1 load-lines">
                {titleLines.map((line, index) => (
                  <span key={line} className="load-line">
                    <span style={delay(0.22 + index * 0.075)}>
                      {line}
                      {index < titleLines.length - 1 ? " " : null}
                    </span>
                  </span>
                ))}
              </h1>
              <p className="hero__lead t-body load-rise" style={delay(0.32)}>
                We design warm, tactile homes around the way you actually live — from the first floor
                plan to the last lamp switched on.
              </p>
            </div>
            <div className="load-rise" style={delay(0.4)}>
              <ButtonLink href="/#about">Explore Studio</ButtonLink>
            </div>
          </div>

          <div className="hero__foot">
            <div className="hero__stats load-rise" style={delay(0.5)}>
              {heroStats.map((stat) => (
                <div key={stat.label} className="stat">
                  <div className="stat__value">
                    <span className="t-h5">{stat.value}</span>
                    <span className="stat__suffix t-tight">{stat.suffix}</span>
                  </div>
                  <p className="t-small text-white">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="hero__card load-rise" style={delay(0.58)}>
              <ProjectCard
                project={featuredProject}
                size="small"
                headingLevel="p"
                sizes="(max-width: 991px) 216px, 232px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

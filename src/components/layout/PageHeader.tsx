import type { CSSProperties, ReactNode } from "react";
import { Eyebrow } from "@/components/ui/primitives";

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export function PageHeader({
  eyebrow,
  title,
  lead,
  meta,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: ReactNode;
}) {
  return (
    <section className="page-header">
      <div className="gutter">
        <div className="container">
          <div className="page-header__inner">
            <div className="load-rise" style={delay(0.15)}>
              <Eyebrow tone="glass">{eyebrow}</Eyebrow>
            </div>
            <h1 className="page-header__title t-h1 load-rise" style={delay(0.22)}>
              {title}
            </h1>
            {lead ? (
              <p className="page-header__lead t-body load-rise" style={delay(0.32)}>
                {lead}
              </p>
            ) : null}
            {meta ? (
              <div className="load-rise" style={delay(0.38)}>
                {meta}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState, type FocusEvent } from "react";
import { cx } from "@/components/ui/primitives";
import { services } from "@/lib/content";

const DEFAULT_INDEX = 2;

export function ServicesExplorer() {
  const [active, setActive] = useState(DEFAULT_INDEX);
  const [dimmed, setDimmed] = useState(false);

  const select = (index: number) => {
    setActive(index);
    setDimmed(true);
  };

  const onListBlur = (event: FocusEvent<HTMLOListElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDimmed(false);
  };

  return (
    <div className="services__body">
      <div className="services__media">
        <div className="services__figure" data-reveal-group="scroll" data-reveal="mask">
          <div className="mask">
            <div className="mask__inner services__stack">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={cx("services__img", index === active && "is-active")}
                  aria-hidden={index !== active}
                >
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 991px) 92vw, 588px"
                    style={{ objectPosition: service.image.focus }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="services__leads" aria-hidden="true">
          {services.map((service, index) => (
            <p
              key={service.id}
              id={`service-lead-${service.id}`}
              className={cx("services__lead t-tight", index === active && "is-active")}
            >
              {service.lead}
            </p>
          ))}
        </div>
      </div>

      <ol className="services__list" onMouseLeave={() => setDimmed(false)} onBlur={onListBlur}>
        {services.map((service, index) => (
          <li key={service.id} className="services__row" data-reveal-group="scroll" data-reveal="rise">
            <button
              type="button"
              className={cx("services__item", dimmed && index !== active && "is-dim")}
              aria-describedby={`service-lead-${service.id}`}
              aria-pressed={index === active}
              onMouseEnter={() => select(index)}
              onFocus={() => select(index)}
              onClick={() => select(index)}
            >
              <span className="services__num">{String(index + 1).padStart(2, "0")}</span>
              <span className="t-h4">{service.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/**
 * Declarative scroll-reveal engine.
 *
 *  [data-reveal-group="scroll"]  → a trigger scope that plays once at "top 82%"
 *  [data-reveal="rise"]          → opacity 0→1, y 24px→0 (0.8s, power3.out)
 *  [data-reveal="fade"]          → opacity 0→1 (1.1s)
 *  [data-reveal="lines"]         → SplitText masked lines, yPercent 110→0, stagger .075
 *  [data-reveal="mask"]          → image curtain: .mask rises while .mask__inner counter-moves
 *  [data-reveal="stagger"]       → children rise with .09 stagger (per-item triggers on mobile)
 *  [data-reveal-at]              → timeline position in seconds
 *
 * Content is visible by default. CSS only hides it while html.js-motion is
 * present, and an inline safety timer reveals everything if this engine never
 * reports html.motion-ready.
 */

const EASE = "power3.out";
const START = "clamp(top 82%)";

function fontsReady(timeout = 1500): Promise<void> {
  if (!document.fonts) return Promise.resolve();
  return Promise.race([
    document.fonts.ready.then(() => undefined),
    new Promise<void>((resolve) => window.setTimeout(resolve, timeout)),
  ]);
}

function itemsOf(group: HTMLElement): HTMLElement[] {
  const candidates = [group, ...Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"))];
  return candidates.filter(
    (el) => el.hasAttribute("data-reveal") && el.closest("[data-reveal-group]") === group,
  );
}

function addReveal(tl: gsap.core.Timeline, el: HTMLElement, desktop: boolean) {
  const at = Number(el.dataset.revealAt ?? 0) || 0;

  switch (el.dataset.reveal) {
    case "rise": {
      const y = Number(el.dataset.revealY ?? 24) || 24;
      tl.fromTo(
        el,
        { autoAlpha: 0, y },
        { autoAlpha: 1, y: 0, duration: 0.8, clearProps: "transform" },
        at,
      );
      break;
    }
    case "fade":
      tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.1 }, at);
      break;
    case "stagger": {
      const children = Array.from(el.children) as HTMLElement[];
      if (desktop) {
        tl.fromTo(
          children,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09, clearProps: "transform" },
          at,
        );
      } else {
        children.forEach((child) => {
          const tween = gsap.fromTo(
            child,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: EASE, paused: true, clearProps: "transform" },
          );
          ScrollTrigger.create({ trigger: child, start: START, once: true, onEnter: () => tween.play() });
        });
      }
      break;
    }
    case "lines": {
      const split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "split-line" });
      gsap.set(el, { autoAlpha: 1 });
      tl.fromTo(
        split.lines,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.075,
          // Restore natural text flow so later resizes re-wrap correctly.
          onComplete: () => split.revert(),
        },
        at,
      );
      break;
    }
    case "mask": {
      const mask = el.querySelector(".mask");
      const inner = el.querySelector(".mask__inner");
      if (mask && inner) {
        // Park the curtain below its frame (clipped by the figure) and make it renderable,
        // then slide it up while the image inside counter-moves so it appears to stay put.
        gsap.set(mask, { yPercent: 100, autoAlpha: 1 });
        gsap.set(inner, { yPercent: -100 });
        tl.to(mask, { yPercent: 0, duration: 1.1, ease: "power4.out" }, at);
        tl.to(inner, { yPercent: 0, duration: 1.1, ease: "power4.out" }, at);
      }
      break;
    }
  }
}

export function MotionProvider() {
  const pathname = usePathname();

  useGSAP(
    (context) => {
      const root = document.documentElement;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion || !root.classList.contains("js-motion")) {
        root.classList.add("motion-ready");
        return;
      }

      let alive = true;

      fontsReady().then(() => {
        if (!alive) return;

        context.add(() => {
          const desktop = window.matchMedia("(min-width: 992px)").matches;

          document.querySelectorAll<HTMLElement>('[data-reveal-group="scroll"]').forEach((group) => {
            const tl = gsap.timeline({ paused: true, defaults: { ease: EASE } });
            itemsOf(group).forEach((el) => addReveal(tl, el, desktop));
            ScrollTrigger.create({ trigger: group, start: START, once: true, onEnter: () => tl.play() });
          });
        });

        root.classList.add("motion-ready");
        ScrollTrigger.refresh();
      });

      return () => {
        alive = false;
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}

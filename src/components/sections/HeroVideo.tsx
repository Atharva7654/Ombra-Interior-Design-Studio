"use client";

import { useEffect, useRef } from "react";

/**
 * Looping, muted hero film. The poster frame is the video's own first frame, so the
 * page reads correctly before playback starts, with JavaScript disabled, and for
 * visitors who prefer reduced motion (in which case the film is paused on the poster).
 */
export function HeroVideo({
  sources,
  poster,
}: {
  sources: ReadonlyArray<{ src: string; type: string }>;
  poster: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => undefined);
      }
    };

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      className="hero__video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
    >
      {sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}

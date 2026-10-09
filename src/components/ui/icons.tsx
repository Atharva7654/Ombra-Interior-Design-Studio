import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M2.5 8h10.25M9 4.25 12.75 8 9 11.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M4.5 11.5 11.25 4.75M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M13.5 8H3.25M7 4.25 3.25 8 7 11.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M1.5 5h13M1.5 11h13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="m2.75 8.5 3.5 3.5 7-8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Ombra mark: an arched doorway, half in shadow. */
export function OmbraMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M4.75 21.25V11a7.25 7.25 0 0 1 14.5 0v10.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3.75A7.25 7.25 0 0 0 4.75 11v10.25H12V3.75Z" fill="currentColor" />
    </svg>
  );
}

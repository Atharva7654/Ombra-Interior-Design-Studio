import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight, OmbraMark } from "./icons";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ Logo */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cx("inline-flex items-center gap-2", className)}>
      <OmbraMark />
      <span className="text-[1.3125rem] leading-none font-semibold tracking-[-0.045em]">Ombra</span>
    </span>
  );
}

/* --------------------------------------------------------------- Eyebrow */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "glass";
  className?: string;
}) {
  return (
    <div className={cx("eyebrow", tone === "glass" ? "eyebrow--glass" : "eyebrow--light", className)}>
      <span className="eyebrow__mark" aria-hidden="true" />
      <span className="label">{children}</span>
    </div>
  );
}

/* ---------------------------------------------------------------- Button */
type ButtonVariant = "light" | "dark";

function ButtonInner({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="btn__icon" aria-hidden="true">
        <ArrowRight />
      </span>
      <span className="btn__label">{children}</span>
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "light",
  className,
  ...rest
}: { href: string; children: ReactNode; variant?: ButtonVariant } & Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "children"
>) {
  return (
    <Link href={href} className={cx("btn", variant === "dark" && "btn--dark", className)} {...rest}>
      <ButtonInner>{children}</ButtonInner>
    </Link>
  );
}

export function Button({
  children,
  variant = "light",
  className,
  ...rest
}: { children: ReactNode; variant?: ButtonVariant } & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cx("btn", variant === "dark" && "btn--dark", className)} {...rest}>
      <ButtonInner>{children}</ButtonInner>
    </button>
  );
}

/* ------------------------------------------------------------ Roll link */
export function RollText({ children }: { children: string }) {
  return (
    <span className="roll">
      <span className="roll__label">{children}</span>
      <span className="roll__copy" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

export function RollLink({
  href,
  children,
  className,
  ...rest
}: { href: string; children: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">) {
  return (
    <Link href={href} className={className} {...rest}>
      <RollText>{children}</RollText>
    </Link>
  );
}

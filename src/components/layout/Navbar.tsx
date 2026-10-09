"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo, RollText } from "@/components/ui/primitives";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 991) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header ref={headerRef} className="nav" data-open={open ? "true" : "false"}>
      <div className="nav__inner nav-load">
        <Link href="/" className="nav__brand" aria-label="Ombra Interior Studio — home" onClick={close}>
          <Logo />
        </Link>

        <nav id="site-menu" className="nav__menu" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav__link label" onClick={close}>
              <RollText>{link.label}</RollText>
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <Link href="/contact" className="nav-cta" onClick={close}>
            <span className="nav-cta__fill" aria-hidden="true" />
            <span className="nav-cta__label">Let&apos;s Talk</span>
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon className="icon-menu" />
            <CloseIcon className="icon-close" />
          </button>
        </div>
      </div>
    </header>
  );
}

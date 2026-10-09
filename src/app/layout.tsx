import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer, Navbar } from "@/components/layout";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { images, site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ombra — Interior Design Studio in Mumbai",
    template: "%s — Ombra Interior Studio",
  },
  description: site.description,
  applicationName: site.legalName,
  openGraph: {
    type: "website",
    siteName: site.legalName,
    locale: "en_IN",
    title: "Ombra — Interior Design Studio in Mumbai",
    description: site.description,
    images: [{ url: images.heroSuite.src, width: 1376, height: 768, alt: images.heroSuite.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ombra — Interior Design Studio in Mumbai",
    description: site.description,
    images: [images.heroSuite.src],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0c",
  colorScheme: "light",
};

/**
 * Runs before first paint. Enables reveal-on-scroll hiding only when motion is
 * allowed, and guarantees content is revealed if the motion engine never boots.
 */
const motionBoot = `(function(){try{var d=document.documentElement;if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js-motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.add('motion-failed')},4000)}catch(e){}})();`;

const noScriptStyles = `<style>@media (max-width:991px){.nav__menu{opacity:1!important;visibility:visible!important;transform:none!important}.nav__toggle{display:none!important}}</style>`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-design-direction="b"
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MotionProvider />
      </body>
    </html>
  );
}

import Link from "next/link";
import { Logo, RollLink } from "@/components/ui/primitives";
import { articles, site } from "@/lib/content";

const columns = [
  {
    id: "footer-studio",
    title: "Studio",
    links: [
      { label: "About", href: "/#about" },
      { label: "Expertise", href: "/#services" },
      { label: "Projects", href: "/#projects" },
      { label: "Impact", href: "/#impact" },
    ],
  },
  {
    id: "footer-journal",
    title: "Journal",
    links: [
      { label: "All Notes", href: "/#journal" },
      ...articles.map((article) => ({ label: article.shortTitle, href: `/journal/${article.slug}` })),
    ],
  },
  {
    id: "footer-info",
    title: "Info",
    links: [
      { label: "Enquire", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" data-reveal-group="scroll">
      <div className="footer__mark-wrap" aria-hidden="true">
        <p className="footer__mark" data-reveal="rise" data-reveal-y="64">
          Ombra
        </p>
      </div>

      <div className="gutter">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__brand" data-reveal="rise" data-reveal-at="0.09">
              <Link href="/" aria-label="Ombra Interior Studio — home">
                <Logo />
              </Link>
              <p className="footer__blurb t-body">
                Calm, tactile interiors for homes and small hospitality spaces — designed in Mumbai,
                made with makers we trust.
              </p>
              <p className="footer__copy t-small">
                © {year} {site.legalName}. All rights reserved.
              </p>
            </div>

            <div className="footer__links" data-reveal="stagger" data-reveal-at="0.18">
              {columns.map((column) => (
                <nav key={column.id} className="footer__col" aria-labelledby={column.id}>
                  <p id={column.id} className="footer__col-title">
                    {column.title}
                  </p>
                  <ul className="footer__list">
                    {column.links.map((link) => (
                      <li key={link.href} className="flex">
                        <RollLink href={link.href} className="footer__link label">
                          {link.label}
                        </RollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}

              <div className="footer__contact">
                <p className="footer__contact-title">Let&apos;s Talk</p>
                <address className="footer__contact-details t-body">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <span>{site.location}</span>
                  <span>{site.hours}</span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

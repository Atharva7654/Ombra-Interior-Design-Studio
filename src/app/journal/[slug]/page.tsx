import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { JournalCard } from "@/components/ui/cards";
import { ArrowLeft } from "@/components/ui/icons";
import { articles, getArticle } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.isoDate,
      images: [{ url: article.image.src, width: 928, height: 1152, alt: article.image.alt }],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((item) => item.slug !== article.slug);

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title={article.title}
        meta={
          <div className="page-header__meta">
            <time className="label" dateTime={article.isoDate}>
              {article.date}
            </time>
            <span className="label">{article.readTime}</span>
          </div>
        }
      />

      <article className="article">
        <div className="gutter">
          <div className="container">
            <div className="article__figure-wrap">
              <div className="article__figure" data-reveal-group="scroll" data-reveal="mask">
                <div className="mask">
                  <div className="mask__inner">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      priority
                      sizes="(max-width: 1272px) 94vw, 1224px"
                      style={{ objectPosition: article.image.focus }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="article__body">
              <p className="article__lede">{article.excerpt}</p>
              {article.body.map((block, index) => (
                <Fragment key={index}>
                  {block.heading ? <h2>{block.heading}</h2> : null}
                  <p>{block.text}</p>
                </Fragment>
              ))}
              <Link href="/#journal" className="article__back label">
                <ArrowLeft />
                Back to the journal
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="more" aria-labelledby="more-title">
        <div className="gutter">
          <div className="container">
            <div className="more__inner">
              <h2 id="more-title" className="t-h5">
                More from the journal
              </h2>
              <ul className="more__list">
                {others.map((item) => (
                  <li key={item.slug} className="journal__item">
                    <JournalCard article={item} sizes="(max-width: 767px) 92vw, 600px" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

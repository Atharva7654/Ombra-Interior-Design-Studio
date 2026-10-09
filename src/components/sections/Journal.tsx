import { JournalCard } from "@/components/ui/cards";
import { Eyebrow } from "@/components/ui/primitives";
import { articles } from "@/lib/content";

export function Journal() {
  return (
    <section id="journal" className="journal" aria-labelledby="journal-title">
      <div className="gutter">
        <div className="container">
          <div className="journal__inner">
            <div className="journal__head" data-reveal-group="scroll">
              <div data-reveal="rise">
                <Eyebrow>Journal &amp; Notes</Eyebrow>
              </div>
              <h2 id="journal-title" className="journal__title t-h3" data-reveal="lines" data-reveal-at="0.09">
                Notes on materials, light and living well
              </h2>
            </div>

            <ul className="journal__list" data-reveal-group="scroll" data-reveal="stagger">
              {articles.map((article) => (
                <li key={article.slug} className="journal__item">
                  <JournalCard article={article} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

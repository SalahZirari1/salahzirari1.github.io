import { featured, nav, otherWork } from '../content';
import { useLang } from '../lang';
import { Section, Tags } from './Section';

export function Work() {
  const { t } = useLang();

  return (
    <Section id="work" label={t(nav[0].label)}>
      <div className="case">
        <div>
          <p className="meta">{featured.meta}</p>
          <h2>{t(featured.title)}</h2>
          <p className="lede">{t(featured.lede)}</p>
        </div>
        <div className="sources" aria-label="Sources">
          {featured.sources.map((s) => (
            <span key={s}>{s}</span>
          ))}
          <span className="more">{t(featured.moreSources)}</span>
        </div>
        <ul className="points">
          {featured.points.map((p) => (
            <li key={p.title.en}>
              <strong>{t(p.title)}</strong>
              <p>{t(p.body)}</p>
            </li>
          ))}
        </ul>
        <Tags items={featured.tags} />
      </div>

      <div className="more-work">
        {otherWork.map((w) => (
          <article className="card" key={w.meta}>
            <p className="meta">{w.meta}</p>
            <h3>{t(w.title)}</h3>
            <p>{t(w.body)}</p>
            <Tags items={w.tags} />
          </article>
        ))}
      </div>
    </Section>
  );
}

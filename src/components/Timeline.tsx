import { nav, timeline } from '../content';
import { useLang } from '../lang';
import { Section } from './Section';

export function Timeline() {
  const { t } = useLang();

  return (
    <Section id="path" label={t(nav.path)}>
      <ol className="timeline" reversed>
        {timeline.map((item) => (
          <li key={item.title.en}>
            <time>{item.years}</time>
            <div>
              <span className="kind">{t(item.kind)}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.detail)}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

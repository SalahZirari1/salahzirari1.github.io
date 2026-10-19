import { approach, nav } from '../content';
import { useLang } from '../lang';
import { Section } from './Section';

export function Approach() {
  const { t } = useLang();

  return (
    <Section id="approach" label={t(nav.approach)}>
      <ul className="approach">
        {approach.map((a) => (
          <li key={a.title.en}>
            <h3>{t(a.title)}</h3>
            <p>{t(a.body)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

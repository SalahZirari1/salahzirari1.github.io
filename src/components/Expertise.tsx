import { expertise, nav } from '../content';
import { useLang } from '../lang';
import { Section, Tags } from './Section';

export function Expertise() {
  const { t } = useLang();

  return (
    <Section id="expertise" label={t(nav.expertise)}>
      <div className="services">
        {expertise.map((e) => (
          <div key={e.title.en}>
            <h3>{t(e.title)}</h3>
            <p>{t(e.body)}</p>
            <Tags items={e.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}

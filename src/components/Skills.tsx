import { languages, nav, skills } from '../content';
import { useLang } from '../lang';
import { Section } from './Section';

export function Skills() {
  const { t } = useLang();

  return (
    <Section id="skills" label={t(nav[2].label)}>
      <div className="skills">
        {skills.map((group) => (
          <div key={group.title.en}>
            <h3>{t(group.title)}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.en}>{t(item)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="langs">
        {languages.map((l) => (
          <div key={l.name.en}>
            <strong>{t(l.name)}</strong>
            <span>{t(l.level)}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

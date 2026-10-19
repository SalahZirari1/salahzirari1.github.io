import { LINKEDIN, figures, hero } from '../content';
import { useLang } from '../lang';
import { LinkedInIcon, MailIcon } from './Icons';

export function Hero() {
  const { t } = useLang();

  return (
    <>
      <div className="hero">
        <div className="status">
          <span className="dot" aria-hidden="true" />
          <span>{t(hero.status)}</span>
        </div>
        <h1>Salah Zirari</h1>
        <p className="role">{t(hero.role)}</p>
        <p className="pitch">{t(hero.pitch)}</p>
        <div className="actions">
          <a className="btn primary" href="#contact">
            <MailIcon />
            {t(hero.contactCta)}
          </a>
          <a className="btn" href="#work">{t(hero.workCta)}</a>
          <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="figures">
        {figures.map((f) => (
          <div key={f.label.en}>
            <b>{f.value}</b>
            <span>{t(f.label)}</span>
          </div>
        ))}
      </div>
    </>
  );
}

import { nav, type Lang } from '../content';
import { useLang } from '../lang';

const langs: Lang[] = ['fr', 'en'];
const links = ['expertise', 'work', 'path', 'skills', 'contact'] as const;

export function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="top">
      <div className="wrap">
        <a className="mark" href="#top">Salah Zirari</a>
        <nav aria-label="Sections">
          {links.map((id) => (
            <a key={id} href={`#${id}`}>{t(nav[id])}</a>
          ))}
        </nav>
        <div className="lang" role="group" aria-label="Langue / Language">
          {langs.map((l) => (
            <button key={l} type="button" id={`lang-${l}`} aria-pressed={lang === l} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

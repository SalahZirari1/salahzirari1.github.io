import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Expertise } from './components/Expertise';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Work } from './components/Work';
import { SOURCE, footer } from './content';
import { useLang } from './lang';

export function App() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main className="wrap" id="top">
        <Hero />
        <Expertise />
        <Work />
        <Approach />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <footer className="wrap">
        <span>© {new Date().getFullYear()} Salah Zirari · Lyon</span>
        <a href={SOURCE} target="_blank" rel="noopener">{t(footer.source)}</a>
      </footer>
    </>
  );
}

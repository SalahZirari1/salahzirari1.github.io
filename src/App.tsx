import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Work } from './components/Work';

export function App() {
  return (
    <>
      <Header />
      <main className="wrap" id="top">
        <Hero />
        <Work />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <footer className="wrap">© {new Date().getFullYear()} Salah Zirari · Lyon</footer>
    </>
  );
}

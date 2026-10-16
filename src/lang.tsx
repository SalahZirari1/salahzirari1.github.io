import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang, Text } from './content';

type LangState = { lang: Lang; setLang: (l: Lang) => void; t: (s: Text) => string };

const LangContext = createContext<LangState | null>(null);

function initialLang(): Lang {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'fr';
  } catch {
    return 'fr';
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // storage blocked: the choice just won't persist
    }
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t: (s) => s[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}

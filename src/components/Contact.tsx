import { useEffect, useRef, useState } from 'react';
import { EMAIL, LINKEDIN, contact, nav } from '../content';
import { useLang } from '../lang';
import { CopyIcon } from './Icons';
import { Section } from './Section';

export function Contact() {
  const { t } = useLang();
  const mailRef = useRef<HTMLSpanElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const selectMail = () => {
    const el = mailRef.current;
    const sel = window.getSelection();
    if (!el || !sel) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const copy = () => {
    if (!navigator.clipboard) return selectMail();
    navigator.clipboard.writeText(EMAIL).then(() => setCopied(true), selectMail);
  };

  return (
    <Section id="contact" label={t(nav[3].label)} className="contact">
      <h2>{t(contact.title)}</h2>
      <p className="pitch" style={{ marginBottom: 0 }}>{t(contact.body)}</p>
      <div className="mail-row">
        <span className="mail" ref={mailRef}>{EMAIL}</span>
        <button className="btn" type="button" id="copy-mail" onClick={copy}>
          <CopyIcon />
          {t(contact.copy)}
        </button>
        <span className="copied" role="status" aria-live="polite">{copied ? t(contact.copied) : ''}</span>
      </div>
      <div className="actions" style={{ marginTop: '1.25rem' }}>
        <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">
          linkedin.com/in/salaheddine-zirari
        </a>
      </div>
    </Section>
  );
}

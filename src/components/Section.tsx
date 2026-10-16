import type { ReactNode } from 'react';

export function Section({ id, label, className, children }: { id: string; label: string; className?: string; children: ReactNode }) {
  return (
    <section className={className ? `block ${className}` : 'block'} id={id}>
      <div className="label">{label}</div>
      <div>{children}</div>
    </section>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

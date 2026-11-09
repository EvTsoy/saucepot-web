import type { ReactNode } from 'react';
import { site } from '@/lib/site';

export type Section = { id: string; title: string; body: ReactNode };

/** Long text page: title, intro, table of contents, headed sections. Plain server HTML, printable. */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: ReactNode;
  sections: Section[];
}) {
  return (
    <article className="mx-auto max-w-[720px] px-5 pb-20 pt-12">
      <h1 className="text-[2.125rem] font-black leading-tight tracking-tight">{title}</h1>
      <p className="mt-2 text-[15px] font-bold text-muted">Last updated {site.legalUpdated}</p>
      {intro ? <div className="prose-legal mt-6">{intro}</div> : null}
      <nav aria-label="Contents" className="no-print mt-8 rounded-[22px] border border-line bg-surface p-5">
        <h2 className="text-[13px] font-black uppercase tracking-wider text-muted">Contents</h2>
        <ol className="mt-3 grid gap-1.5 text-[15px] font-extrabold sm:grid-cols-2">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="no-underline hover:underline">
                {i + 1}. {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="prose-legal">
        {sections.map((s, i) => (
          <section key={s.id} aria-labelledby={s.id}>
            <h2 id={s.id}>
              {i + 1}. {s.title}
            </h2>
            {s.body}
          </section>
        ))}
      </div>
    </article>
  );
}

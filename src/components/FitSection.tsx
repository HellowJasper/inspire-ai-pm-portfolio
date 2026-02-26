import type { BaseSectionProps } from '../types/profile'

export function FitSection({ content }: BaseSectionProps) {
  return (
    <section id="fit" className="section reveal" data-reveal>
      <header className="section-header">
        <h2 className="section-title">{content.fit.header.title}</h2>
        <p className="section-subtitle">{content.fit.header.subtitle}</p>
      </header>

      <div className="fit-grid">
        {content.fit.items.map((item) => (
          <article key={item.title} className="fit-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

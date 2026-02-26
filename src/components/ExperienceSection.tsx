import type { BaseSectionProps } from '../types/profile'

export function ExperienceSection({ content }: BaseSectionProps) {
  return (
    <section id="experience" className="section reveal" data-reveal>
      <header className="section-header">
        <h2 className="section-title">{content.experiences.header.title}</h2>
        <p className="section-subtitle">{content.experiences.header.subtitle}</p>
      </header>

      <div className="experience-grid">
        {content.experiences.items.map((item) => (
          <article key={`${item.company}-${item.period}`} className="experience-card">
            <div className="experience-top">
              <h3 className="experience-company">{item.company}</h3>
              <p className="experience-period">{item.period}</p>
            </div>
            <p className="experience-role">{item.role}</p>
            <p className="experience-background">{item.background}</p>

            <ul className="highlight-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="metrics">
              {item.metrics.map((metric) => (
                <span key={metric} className="metric-chip">
                  {metric}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

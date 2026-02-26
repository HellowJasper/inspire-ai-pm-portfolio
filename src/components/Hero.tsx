import type { BaseSectionProps } from '../types/profile'

export function Hero({ content }: BaseSectionProps) {
  const { hero, contact } = content
  const phoneHref = `tel:${contact.detail.phone.replace(/[^\d+]/g, '')}`

  return (
    <section id="hero" className="section hero reveal is-visible" data-reveal>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-name">{hero.name}</h1>
          <p className="hero-role">{hero.role}</p>
          <p className="hero-tagline">{hero.tagline}</p>
          <p className="hero-location">{hero.location}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#experience">
              {hero.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href="#process">
              {hero.ctaSecondary}
            </a>
          </div>

          <div className="hero-contacts">
            <a className="contact-pill" href={phoneHref}>
              {contact.detail.phone}
            </a>
            <a className="contact-pill" href={`mailto:${contact.detail.email}`}>
              {contact.detail.email}
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="hero-panel-title">{hero.panelTitle}</p>
          <ul className="hero-focus-list">
            {hero.focusPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="hero-stats">
            {hero.heroStats.map((stat) => (
              <span key={stat} className="hero-stat">
                {stat}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

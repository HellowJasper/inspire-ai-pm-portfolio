import type { BaseSectionProps } from '../types/profile'

export function ContactSection({ content }: BaseSectionProps) {
  const { detail } = content.contact
  const phoneHref = `tel:${detail.phone.replace(/[^\d+]/g, '')}`

  return (
    <section id="contact" className="section contact-section reveal" data-reveal>
      <header className="section-header">
        <h2 className="section-title">{content.contact.header.title}</h2>
        <p className="section-subtitle">{content.contact.header.subtitle}</p>
      </header>

      <article className="contact-card">
        <p className="contact-cta">{content.contact.cta}</p>

        <div className="contact-actions">
          <a href={phoneHref}>{detail.phone}</a>
          <a href={`mailto:${detail.email}`}>{detail.email}</a>
          <a href={detail.githubUrl} target="_blank" rel="noreferrer">
            {detail.githubLabel}
          </a>
        </div>

        <p className="contact-note">{detail.availability}</p>
      </article>
    </section>
  )
}

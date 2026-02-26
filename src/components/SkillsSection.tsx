import type { BaseSectionProps } from '../types/profile'

export function SkillsSection({ content }: BaseSectionProps) {
  return (
    <section id="skills" className="section reveal" data-reveal>
      <header className="section-header">
        <h2 className="section-title">{content.skills.header.title}</h2>
        <p className="section-subtitle">{content.skills.header.subtitle}</p>
      </header>

      <div className="skills-grid">
        {content.skills.groups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

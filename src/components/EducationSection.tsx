import type { BaseSectionProps } from '../types/profile'

export function EducationSection({ locale, content }: BaseSectionProps) {
  const { details } = content.education
  const labels =
    locale === 'zh'
      ? { honors: '获奖荣誉', campus: '校园实践' }
      : { honors: 'Honors', campus: 'Campus Practice' }

  return (
    <section id="education" className="section reveal" data-reveal>
      <header className="section-header">
        <h2 className="section-title">{content.education.header.title}</h2>
        <p className="section-subtitle">{content.education.header.subtitle}</p>
      </header>

      <article className="education-card">
        <div className="education-main">
          <h3>{details.school}</h3>
          <p>{details.major}</p>
          <p>{details.period}</p>
          <p className="education-gpa">{details.gpa}</p>
        </div>

        <div className="education-columns">
          <div>
            <h4>{labels.honors}</h4>
            <ul className="bullet-list">
              {details.honors.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{labels.campus}</h4>
            <ul className="bullet-list">
              {details.campus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}

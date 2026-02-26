import type { BaseSectionProps } from '../types/profile'

export function ProcessSection({ locale, content }: BaseSectionProps) {
  const labels =
    locale === 'zh'
      ? { goal: '目标', prompt: 'Prompt 策略', result: '结果' }
      : { goal: 'Goal', prompt: 'Prompt Strategy', result: 'Result' }

  return (
    <section id="process" className="section reveal" data-reveal>
      <header className="section-header">
        <h2 className="section-title">{content.process.header.title}</h2>
        <p className="section-subtitle">{content.process.header.subtitle}</p>
      </header>

      <p className="process-intro">{content.process.intro}</p>

      <ol className="process-grid">
        {content.process.steps.map((step) => (
          <li key={step.phase} className="process-card">
            <p className="phase-tag">{step.phase}</p>
            <div className="process-field">
              <h3>{labels.goal}</h3>
              <p>{step.goal}</p>
            </div>
            <div className="process-field">
              <h3>{labels.prompt}</h3>
              <p>{step.promptStrategy}</p>
            </div>
            <div className="process-field">
              <h3>{labels.result}</h3>
              <p>{step.result}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

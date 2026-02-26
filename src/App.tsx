import { useEffect, useMemo, useState } from 'react'
import { ContactSection } from './components/ContactSection'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { FitSection } from './components/FitSection'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { ProcessSection } from './components/ProcessSection'
import { SkillsSection } from './components/SkillsSection'
import { profileContent } from './content/profile'
import { useLocale } from './hooks/useLocale'

function App() {
  const { locale, setLocale } = useLocale()
  const content = useMemo(() => profileContent[locale], [locale])
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    document.title = content.meta.documentTitle
  }, [content.meta.documentTitle])

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const rawProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setScrollProgress(Math.min(1, Math.max(0, rawProgress)))
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    if (revealItems.length === 0) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [locale])

  return (
    <div className="app-root">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden
      />
      <div className="bg-grid" aria-hidden />
      <div className="bg-orb orb-one" aria-hidden />
      <div className="bg-orb orb-two" aria-hidden />
      <div className="bg-orb orb-three" aria-hidden />

      <NavBar locale={locale} content={content} setLocale={setLocale} />

      <main className="app-shell">
        <Hero locale={locale} content={content} />
        <FitSection locale={locale} content={content} />
        <ExperienceSection locale={locale} content={content} />
        <ProcessSection locale={locale} content={content} />
        <EducationSection locale={locale} content={content} />
        <SkillsSection locale={locale} content={content} />
        <ContactSection locale={locale} content={content} />
      </main>

      <footer className="footer">
        <div className="footer-inner">{content.footerNote}</div>
      </footer>
    </div>
  )
}

export default App

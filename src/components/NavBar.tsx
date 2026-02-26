import { useEffect, useState } from 'react'
import type { BaseSectionProps, Locale } from '../types/profile'

interface NavBarProps extends BaseSectionProps {
  setLocale: (next: Locale) => void
}

export function NavBar({ locale, content, setLocale }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const nextLocale: Locale = locale === 'zh' ? 'en' : 'zh'

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setIsMenuOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const handleLocaleSwitch = () => {
    setLocale(nextLocale)
    closeMenu()
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#hero" onClick={closeMenu}>
          {content.meta.siteTitle}
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? content.meta.menuClose : content.meta.menuOpen}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? content.meta.menuClose : content.meta.menuOpen}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {content.nav.map((item) => (
            <a
              key={item.href}
              className="nav-link"
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="locale-switch"
            onClick={handleLocaleSwitch}
            aria-label={content.meta.localeAriaLabel}
          >
            {content.meta.localeToggle}
          </button>
        </nav>
      </div>
    </header>
  )
}

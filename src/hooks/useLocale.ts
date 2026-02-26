import { useCallback, useState } from 'react'
import type { Locale } from '../types/profile'

const STORAGE_KEY = 'personal-portfolio-locale'
const DEFAULT_LOCALE: Locale = 'zh'

const isLocale = (value: string | null): value is Locale =>
  value === 'zh' || value === 'en'

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE

    const saved = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(saved) ? saved : DEFAULT_LOCALE
  })

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }, [])

  return { locale, setLocale }
}

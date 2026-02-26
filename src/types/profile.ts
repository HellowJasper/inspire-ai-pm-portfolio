export type Locale = 'zh' | 'en'

export interface NavItem {
  label: string
  href: string
}

export interface ProfileMeta {
  documentTitle: string
  siteTitle: string
  menuOpen: string
  menuClose: string
  localeToggle: string
  localeAriaLabel: string
}

export interface HeroContent {
  eyebrow: string
  name: string
  role: string
  tagline: string
  location: string
  ctaPrimary: string
  ctaSecondary: string
  panelTitle: string
  focusPoints: string[]
  heroStats: string[]
}

export interface FitItem {
  title: string
  detail: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  background: string
  highlights: string[]
  metrics: string[]
}

export interface ProcessStep {
  phase: string
  goal: string
  promptStrategy: string
  result: string
}

export interface EducationContent {
  school: string
  major: string
  period: string
  gpa: string
  honors: string[]
  campus: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ContactContent {
  phone: string
  email: string
  githubLabel: string
  githubUrl: string
  availability: string
}

export interface SectionHeader {
  title: string
  subtitle: string
}

export interface ProfileContent {
  meta: ProfileMeta
  nav: NavItem[]
  hero: HeroContent
  fit: {
    header: SectionHeader
    items: FitItem[]
  }
  experiences: {
    header: SectionHeader
    items: ExperienceItem[]
  }
  process: {
    header: SectionHeader
    intro: string
    steps: ProcessStep[]
  }
  education: {
    header: SectionHeader
    details: EducationContent
  }
  skills: {
    header: SectionHeader
    groups: SkillGroup[]
  }
  contact: {
    header: SectionHeader
    cta: string
    detail: ContactContent
  }
  footerNote: string
}

export interface BaseSectionProps {
  locale: Locale
  content: ProfileContent
}

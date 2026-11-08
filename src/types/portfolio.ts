export interface Socials {
  github: string
  instagram: string
  tiktok: string
  facebook: string
}

export interface Personal {
  name: string
  title: string
  experienceYears: string
  location: string
  photo: string
  socials: Socials
  bio: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  tasks: string[]
  techStack: string[]
}

export interface Project {
  id: string
  title: string
  category: string
  company: string
  period: string
  description: string
  tasks: string[]
  tags: string[]
}

export interface Education {
  degree: string
  institution: string
  faculty: string
  year: string
  thesis: string
}

export interface Certification {
  title: string
  issuer: string
  year: string
  skills: string
}

export interface PortfolioData {
  personal: Personal
  skills: SkillGroup[]
  experiences: Experience[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
}


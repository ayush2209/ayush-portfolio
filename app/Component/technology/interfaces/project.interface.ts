export interface Project {
  projectName: string;
  technologiesUsed: string;
  role: string;
  responsibilities: string[];
  achievements?: string;
}

export interface Company {
  companyName: string;
  duration: string;
  role: string;
  image: string;
  projects: Project[];
  summary?: string;
}

export interface ProjectData {
  title: string;
  subtitle: string;
  highlights: string[];
  company: Company[];
}

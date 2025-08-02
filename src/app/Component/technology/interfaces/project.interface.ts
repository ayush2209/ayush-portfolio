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
  projects: Project[];
}

export interface ProjectData {
  company: Company[];
}

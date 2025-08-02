import { Component } from '@angular/core';
import { PROJECT_DETAILS } from 'src/assets/Common/projectDetails';
import { ProjectData } from './interfaces/project.interface';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  standalone: false
})
export class TechnologyComponent {
  protected projectData: ProjectData = PROJECT_DETAILS;
  protected isLoading = true;
  protected error: string | null = null;

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    try {
      // Simulate loading state for better UX
      setTimeout(() => {
        if (!this.projectData?.company?.length) {
          this.error = 'No project data available';
        }
        this.isLoading = false;
      }, 500);
    } catch (error) {
      this.error = 'Error loading project data';
      this.isLoading = false;
    }
  }

  protected getProjectId(name: string): string {
    return 'heading' + name.replace(/\s+/g, '');
  }

  protected trackByCompany(index: number, company: any): string {
    return company.companyName;
  }

  protected trackByProject(index: number, project: any): string {
    return project.projectName;
  }

  protected trackByResponsibility(index: number, responsibility: string): string {
    return responsibility;
  }
}

import { Component, OnInit } from '@angular/core';
import { CAREER_DETAILS } from 'src/assets/Common/careerDetails';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    standalone: false
})
export class ProjectComponent implements OnInit {

  careerDetailsObj = CAREER_DETAILS;
  
  constructor() { }
  
  ngOnInit(): void {
    console.log('Project section viewed.');
  }

  /**
   * Project click handler - tracking removed
   */
  onProjectClick(project: any): void {
    console.log('Project clicked:', project.name || project.title);
  }

  /**
   * Project link click handler - tracking removed
   */
  onProjectLinkClick(project: any, linkType: string): void {
    console.log('Project link clicked:', project.name, linkType);
  }

}

import { Component, OnInit } from '@angular/core';
import { PROJECT_DETAILS } from 'src/assets/Common/projectDetails';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  projectData = PROJECT_DETAILS
  constructor() { }

  ngOnInit(): void {
  }

  getProjectId(name: string): string {
    return 'heading' + name.replace(/\s+/g, '');
  }
}

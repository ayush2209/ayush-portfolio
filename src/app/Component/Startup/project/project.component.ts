import { Component, OnInit } from '@angular/core';
import { CAREER_DETAILS } from 'src/assets/Common/careerDetails';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  careerDetailsObj = CAREER_DETAILS;
  constructor() { }
  ngOnInit(): void { }

}

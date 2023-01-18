import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }
  hireMe() {
    alert('I will open one modal with form.');
  }
  saveResumeAsPDF() {
    this.commonService.downloadResume();
  }
}

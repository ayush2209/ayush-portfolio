import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Service/common.service';

@Component({
  selector: 'app-about-ayush',
  templateUrl: './about-ayush.component.html',
  styleUrls: ['./about-ayush.component.scss']
})
export class AboutAyushComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }
  saveResumeAsPDF() {
    this.commonService.downloadResume();
  }
}

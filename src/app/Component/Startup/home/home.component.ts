import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/Shared/Service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commonService: CommonService, private spinner: NgxSpinnerService) { }

  ngOnInit() { }
  hireMe() {
    this.commonService.sendLoadingMessage.next('Hire Me ...');
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  saveResumeAsPDF() {
    this.spinner.show();
    this.commonService.sendLoadingMessage.next('Downloading ...');
    this.commonService.downloadResume();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}

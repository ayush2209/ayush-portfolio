import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/Shared/Service/common.service';

@Component({
  selector: 'app-about-ayush',
  templateUrl: './about-ayush.component.html',
  styleUrls: ['./about-ayush.component.scss']
})
export class AboutAyushComponent implements OnInit {

  constructor(private commonService: CommonService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  formSubmit() {
    this.commonService.sendLoadingMessage.next('Thanks You.');
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}

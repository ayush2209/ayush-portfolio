import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from './Shared/Service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private spinner: NgxSpinnerService,
    private commonService: CommonService
  ) { }

  redirectToComponentPosition(event: any) {
    document.querySelector(event)?.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() { }
}

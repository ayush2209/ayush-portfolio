import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/Shared/Service/common.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    standalone: false
})
export class LoaderComponent implements OnInit {
  loaderMsg = 'Msg_Loading';
  constructor(private commonService: CommonService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.openLoader();
    this.commonService.sendLoadingMessage.subscribe(message => {
      this.loaderMsg = message;
    })
  }

  openLoader() {
    this.spinner.show();
    this.commonService.sendLoadingMessage.next('Msg_Loading');
    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }
}

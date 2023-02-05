import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/Shared/Service/common.service';
import { ModalDialogService } from '../../On-Demand/common-modal/modal-dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private spinner: NgxSpinnerService,
    private _modalService: ModalDialogService,
    private _http: HttpClient) { }

  httpUrl: string = `https://anand-ayush-default-rtdb.firebaseio.com/`;

  ngOnInit() { }

  sendMessage(formData: NgForm) {
    formData.value['formType'] = "Hire_me";
    this.spinner.show();
    console.log((formData.value));
    this._http.post(`${this.httpUrl}/hireMe.json`, formData.value).subscribe(response => {
      formData.reset();
      this.spinner.hide();
    })
  }

  saveResumeAsPDF() {
    this.spinner.show();
    this.commonService.sendLoadingMessage.next('Downloading ...');
    // this.commonService.downloadResume();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}

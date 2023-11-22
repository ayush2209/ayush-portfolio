import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Version, VERSION } from '@angular/core';
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
  angularCurrentVersion: any
  total_YOE: string | undefined;

  constructor(
    private commonService: CommonService,
    private spinner: NgxSpinnerService,
    private _modalService: ModalDialogService,
    private _http: HttpClient) {
    this.angularCurrentVersion = VERSION.full;
    this.getTotalYearsOFExperience();
  }

  httpUrl: string = `https://anand-ayush-default-rtdb.firebaseio.com/`;

  TECH_DESCRIPTION: string[] = ['Tech_Desc_1', 'Tech_Desc_2', 'Tech_Desc_3', 'Tech_Desc_4', 'Tech_Desc_5', 'Tech_Desc_6', 'Tech_Desc_7', 'Tech_Desc_8'];

  ngOnInit() {
  }

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
    this.commonService.downloadResume();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getTotalYearsOFExperience() {
    const specificDate = new Date('2019-07-19');
    const currentDate = new Date();

    const timeDiff = currentDate.getTime() - specificDate.getTime();

    const diffYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    this.total_YOE = `${diffYears}.${diffMonths}`
  }
}

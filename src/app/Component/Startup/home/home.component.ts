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
  userName = "Ayush Anand"
  constructor(
    private commonService: CommonService,
    private spinner: NgxSpinnerService,
    private _modalService: ModalDialogService,
    private _http: HttpClient) {
    this.angularCurrentVersion = VERSION.full;
  }

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
    this.commonService.downloadResume();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getTotalYearsOFExperience() {
    // Specify the specific date in ISO format (YYYY-MM-DD)
    const specificDate = new Date('2019-07-19');

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference between the two dates in milliseconds
    const timeDiff = currentDate.getTime() - specificDate.getTime();

    // Calculate the difference in years and months
    const diffYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    // Print the result
    console.log(`Total years: ${diffYears}`);
    console.log(`Total months: ${diffMonths}`);
    return `${diffYears}.${diffMonths}`
  }
}

import { Component, OnInit } from '@angular/core';
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
    private _modalService: ModalDialogService) { }

  ngOnInit() { }
  hireMe() {
    const config = {
      title: 'Hire me',
      ignoreBackClick: true,
      content: 'Dynamic'
    }
    this._modalService.openModal(config);
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

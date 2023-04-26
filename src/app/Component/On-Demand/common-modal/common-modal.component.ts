import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'src/app/Shared/local-storage.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss']
})
export class CommonModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private _localStorrage : LocalStorageService) { }
  modalTitle: any;
  modalContent: any;
  isWarning = false;
  ngOnInit(): void {
  }

  modalClose() {
    this.bsModalRef.hide();
  }

  objectOfView: any;
  modalOkClick(btnType: any) {
    this.modalClose();
    this.objectOfView.emitEvent(btnType);
  }

  handleCheckBoxSelected(event: any) {
    console.log(event.target.checked);
    if(event.target.checked) {
      this._localStorrage.setdata({key: 'dontShowThisAgain' , value: true})
    } else {
      this._localStorrage.setdata({key: 'dontShowThisAgain' , value: false})
    }
  }
}

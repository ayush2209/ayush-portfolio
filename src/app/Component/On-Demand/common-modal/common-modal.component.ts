import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss']
})
export class CommonModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }
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
}

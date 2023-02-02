import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { CommonModalComponent } from '../common-modal/common-modal.component'
import { ModalConfig } from './modal-config';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {
  constructor(public modalService: BsModalService) { }

  modalRef!: BsModalRef;
  // Observable to return the string containing event emitted by button pressed
  closeModalEvent: Subject<any> = new Subject();
  closeModalEventSubscription!: Subscription;
  // isWarning = false;

  public openModal(config: ModalConfig) {
    // this.isWarning = config.isWaringMsg;
    const modalData = {
      class: 'modal-dialog-centered',
      ignoreBackdropClick: true,
      initialState: {
        modalTitle: config.title,
        modalContent: config.content,
        isWarning: config.isWarning
        // type: configParameters.type,
        // defaultButton: 'YES',
        // icon: configParameters.icon,
        // listContent: configParameters.listContent
      },
    }
    this.modalRef = this.modalService.show(CommonModalComponent, modalData);
    this.modalRef.content.objectOfView = this; //Didn't understood.
  }

  public emitEvent(btnType: any) {
    this.closeModalEvent.next(btnType);
  }


  // This function will be called from the project component to read the event emitted by button pressed
  public buttonPressEvent() {
    return new Promise<any>(resolve => {
      if (this.closeModalEventSubscription) {
        this.closeModalEventSubscription.unsubscribe();
      }
      this.closeModalEventSubscription = this.closeModalEvent.subscribe(data => {
        resolve(data);
      });
    });
  }

}

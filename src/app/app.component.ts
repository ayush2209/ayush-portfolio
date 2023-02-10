import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDialogService } from './Component/On-Demand/common-modal/modal-dialog.service';
import { CommonService } from './Shared/Service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShow: boolean = false;
  topPosToStartShowing: number = 250;
  constructor(
    private spinner: NgxSpinnerService,
    private commonService: CommonService,
    private _modalService: ModalDialogService
  ) { }

  redirectToComponentPosition(event: any) {
    document.querySelector(event)?.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    setTimeout(() => {
      this.openModalAfter5SecOfLaunch();
    }, 2000);
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    this.isShow = false;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  openModalAfter5SecOfLaunch() {
    const config = {
      title: 'Apologies',
      ignoreBackClick: false,
      content: 'While developing this portfilio, "I reliased, Writting code is easier then the technical content." There are many area having duplicate strings, My Main motive was to build it.Working on Strings. Sorry for this.'
    }
    this._modalService.openModal(config);
  }

}

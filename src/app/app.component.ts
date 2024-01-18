import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDialogService } from './Component/On-Demand/common-modal/modal-dialog.service';
import { LocalStorageService } from './Shared/local-storage.service';
import { CommonService } from './Shared/Service/common.service';

import * as AOS from 'aos';
import { ModalConfig } from './Component/On-Demand/common-modal/modal-config';
import { TranslateService } from '@ngx-translate/core';

export const welcomeData = [
];


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
    public _modalService: ModalDialogService,
    public _localStorageService: LocalStorageService,
    private _translateService: TranslateService
  ) {
    this._translateService.setDefaultLang(this._localStorageService.getData('lang') || 'en');
  }

  redirectToComponentPosition(event: any) {
    document.querySelector(event)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    setTimeout(() => {
      this.openModalAfter5SecOfLaunch();
    }, 100);

    AOS.init();
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

  private WELCOME_DATA = ['Upgraded_Angular_17', 'New_Syntax_Control_Flow', 'Lazy_Loading_Deferred', 'Automatic_Migration_Control_Flow', 'Improved_Build_Performance_ESBuild', 'Work_In_Progress_Localization'];

  openModalAfter5SecOfLaunch() {
    if (!(this._localStorageService.getData('dontShowThisAgain') == 'true')) {
      const config: ModalConfig = {
        title: 'Welcome',
        ignoreBackClick: false,
        content: this.WELCOME_DATA
      };
      this._modalService.openModal(config);
    }
  }
}

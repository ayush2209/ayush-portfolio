import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDialogService } from './Component/On-Demand/common-modal/modal-dialog.service';
import { LocalStorageService } from './Shared/local-storage.service';
import { CommonService } from './Shared/Service/common.service';

import * as AOS from 'aos';
import { ModalConfig } from './Component/On-Demand/common-modal/modal-config';

export const welcomeData = [
  "Upgraded to Angular 17",
  "New Syntax for Control Flow in Templates",
  "Lazy Loading: Deferred Loading for specific elements or components",
  "Automatic Migration to Built-in Control Flow",
  "Improved Build Performance with ESBuild",
  "Work in Progress: Implementing Localization Support"
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
    public _localStorageService: LocalStorageService
  ) { }

  redirectToComponentPosition(event: any) {
    document.querySelector(event)?.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    setTimeout(() => {
      this.openModalAfter5SecOfLaunch();
    }, 2000);

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

  private WELCOME_DATA = [
    "Upgraded to Angular 17",
    "New Syntax for Control Flow in Templates",
    "Lazy Loading: Deferred Loading for specific elements or components",
    "Automatic Migration to Built-in Control Flow",
    "Improved Build Performance with ESBuild",
    "Work in Progress: Implementing Localization Support"
  ];

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

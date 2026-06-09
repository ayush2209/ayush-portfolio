import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDialogService } from './Component/On-Demand/common-modal/modal-dialog.service';
import { LocalStorageService } from './Shared/local-storage.service';
import { CommonService } from './Shared/Service/common.service';
import { GtmService } from './Shared/Service/gtm.service';
import { ModalConfig } from './Component/On-Demand/common-modal/modal-config';
import { TranslateService } from '@ngx-translate/core';
import { ContactScrollService } from './Shared/Service/contact-scroll.service';

import * as AOS from 'aos';

export const welcomeData = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  isShow = false;
  topPosToStartShowing = 250;
  activeSection = 'home';
  currentYear = new Date().getFullYear();

  readonly navLinks = [
    { id: 'home', target: '#home', labelKey: 'Nav_Home' },
    { id: 'experience', target: '#experience', labelKey: 'Experience' },
    { id: 'contact', target: '#contactMe', labelKey: 'Contact_Me' }
  ];

  private readonly WELCOME_DATA = [
    'Upgraded_Angular_17', 'New_Syntax_Control_Flow', 'Lazy_Loading_Deferred',
    'Automatic_Migration_Control_Flow', 'Improved_Build_Performance_ESBuild', 'Work_In_Progress_Localization'
  ];

  constructor(
    private spinner: NgxSpinnerService,
    private commonService: CommonService,
    public _modalService: ModalDialogService,
    public _localStorageService: LocalStorageService,
    private _translateService: TranslateService,
    private gtmService: GtmService,
    private contactScroll: ContactScrollService
  ) {
    this._translateService.setDefaultLang(this._localStorageService.getData('lang') || 'en');
  }

  ngOnInit() {
    this.initializeGTM();
    setTimeout(() => this.openModalAfter5SecOfLaunch(), 100);
    AOS.init();
  }

  scrollToSection(target: string) {
    if (target === '#contactMe') {
      this.contactScroll.scrollToForm('contact');
      return;
    }
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isShow = scrollPosition >= this.topPosToStartShowing;
    this.updateActiveSection(scrollPosition);
  }

  private updateActiveSection(scrollPosition: number) {
    const offset = 140;
    const sections = [
      { id: 'contact', el: document.getElementById('contactMe') },
      { id: 'experience', el: document.getElementById('experience') },
      { id: 'home', el: document.getElementById('home') }
    ];

    for (const section of sections) {
      if (section.el && section.el.offsetTop - offset <= scrollPosition) {
        this.activeSection = section.id;
        return;
      }
    }
    this.activeSection = 'home';
  }

  gotoTop() {
    this.isShow = false;
    this.activeSection = 'home';
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  private openModalAfter5SecOfLaunch() {
    if (this._localStorageService.getData('dontShowThisAgain') !== 'true') {
      const config: ModalConfig = {
        title: 'Welcome_String',
        ignoreBackClick: false,
        content: this.WELCOME_DATA
      };
      this._modalService.openModal(config);
    }
  }

  private initializeGTM(): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.gtmService.initGTM());
    } else {
      this.gtmService.initGTM();
    }
  }
}

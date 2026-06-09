import { Component, OnInit, VERSION } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/Shared/Service/common.service';
import { ContactScrollService } from 'src/app/Shared/Service/contact-scroll.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
  angularCurrentVersion = VERSION.full;
  total_YOE: string | undefined;

  readonly highlightPillars = [
    { icon: 'fa-rocket', titleKey: 'Highlight_Delivery_Title', bodyKey: 'Highlight_Delivery_Body' },
    { icon: 'fa-universal-access', titleKey: 'Highlight_Accessibility_Title', bodyKey: 'Highlight_Accessibility_Body' },
    { icon: 'fa-users', titleKey: 'Highlight_Mentorship_Title', bodyKey: 'Highlight_Mentorship_Body' }
  ];

  readonly skillMarqueeRows = [
    {
      direction: 'forward',
      durationSec: 40,
      items: [
        { type: 'category', labelKey: 'Skills_Core' },
        { type: 'skill', label: 'Angular' },
        { type: 'skill', label: 'TypeScript' },
        { type: 'skill', label: 'JavaScript' },
        { type: 'skill', label: 'RxJS' },
        { type: 'skill', label: 'HTML5' },
        { type: 'skill', label: 'SCSS' }
      ]
    },
    {
      direction: 'reverse',
      durationSec: 40,
      items: [
        { type: 'category', labelKey: 'Skills_Tools' },
        { type: 'skill', label: 'Git' },
        { type: 'skill', label: 'JIRA' },
        { type: 'skill', label: 'Jasmine' },
        { type: 'skill', label: 'Karma' },
        { type: 'skill', label: 'ESBuild' },
        { type: 'skill', label: 'Firebase' },
        { type: 'category', labelKey: 'Skills_UI' },
        { type: 'skill', label: 'Bootstrap' },
        { type: 'skill', label: 'Angular Material' },
        { type: 'skill', label: 'Responsive UI' },
        { type: 'skill', label: 'WCAG / a11y' }
      ]
    }
  ];

  constructor(
    private commonService: CommonService,
    private spinner: NgxSpinnerService,
    private contactScroll: ContactScrollService) {
    this.getTotalYearsOFExperience();
  }

  TECH_DESCRIPTION: string[] = ['Tech_Desc_1', 'Tech_Desc_2', 'Tech_Desc_3', 'Tech_Desc_4', 'Tech_Desc_5', 'Tech_Desc_6', 'Tech_Desc_7', 'Tech_Desc_8'];

  ngOnInit() { }

  get highlightStats() {
    return [
      { icon: 'fa-calendar', value: this.total_YOE ?? '—', labelKey: 'Stat_Years_Label' },
      { icon: 'fa-building', value: '4', labelKey: 'Stat_Companies_Label' },
      { icon: 'fa-code', value: '-', labelKey: 'Stat_Tech_Label' }
    ];
  }

  goToContactForm(): void {
    this.contactScroll.scrollToForm('hire');
  }

  saveResumeAsPDF() {
    this.spinner.show();
    this.commonService.sendLoadingMessage.next('Msg_Downloading_Resume');
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
    this.total_YOE = `${diffYears}.${diffMonths}`;
  }
}

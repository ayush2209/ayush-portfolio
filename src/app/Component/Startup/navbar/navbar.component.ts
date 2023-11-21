import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/Shared/Service/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // In your component class
  languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ru', name: 'Russian' },
    // Add more languages as needed
  ];

  saveAs() {
    window.print();
  }

  constructor(
    private _translateService: TranslateService,
    private commonService: CommonService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  selectLanguage(lang: string) {
    console.log('Language: ', lang);
    this.spinner.show();
    setTimeout(() => {
      this._translateService.use(lang);
      this.spinner.hide();
    }, 2000);
    this.commonService.sendLoadingMessage.next('Translating ...');
  }
}

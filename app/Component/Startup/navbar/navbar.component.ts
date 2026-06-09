import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/Shared/Service/common.service';
import { LocalStorageService } from 'src/app/Shared/local-storage.service';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
  host: { class: 'app-navbar' }
})
export class NavbarComponent implements OnInit {

  languages = [
    { code: 'en', nameKey: 'Lang_English' },
    { code: 'hi', nameKey: 'Lang_Hindi' },
    { code: 'de', nameKey: 'Lang_German' },
    { code: 'es', nameKey: 'Lang_Spanish' },
    { code: 'fr', nameKey: 'Lang_French' },
    { code: 'it', nameKey: 'Lang_Italian' },
    { code: 'ja', nameKey: 'Lang_Japanese' },
    { code: 'ru', nameKey: 'Lang_Russian' }
  ];

  saveAs() {
    window.print();
  }

  constructor(
    private _translateService: TranslateService,
    private commonService: CommonService,
    private spinner: NgxSpinnerService,
    public _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  /**
   * Navigation click handler - tracking removed
   */
  trackNavigation(section: string): void {
    console.log('Navigation clicked:', section);
  }

  setLangAsDefault = false;
  selectLanguage(lang: string) {
    console.log('Language: ', lang);
    
    this.spinner.show();
    setTimeout(() => {
      this._translateService.use(lang);
      this.spinner.hide();
      this.setLangAsDefault = false;
    }, 2000);
    this.commonService.sendLoadingMessage.next('Msg_Translating');
    this._localStorageService.setdata({ key: 'lang', value: lang })
  }

  saveLangAsDefault(event: any): void {
    event.target.checked ? this.setLangAsDefault = true : this.setLangAsDefault = false;
  }
}

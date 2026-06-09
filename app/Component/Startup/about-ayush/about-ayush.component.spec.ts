import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { AboutAyushComponent } from './about-ayush.component';
import { CommonService } from 'src/app/Shared/Service/common.service';
import { LocalStorageService } from 'src/app/Shared/local-storage.service';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ContactFormComponent } from 'src/app/Shared/Component/contact-form/contact-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GtmService } from 'src/app/Shared/Service/gtm.service';

describe('AboutAyushComponent', () => {
  let component: AboutAyushComponent;
  let fixture: ComponentFixture<AboutAyushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutAyushComponent, ContactFormComponent],
      imports: [FormsModule, TranslateModule.forRoot(), MatFormFieldModule, MatInputModule, RouterTestingModule],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: NgxSpinnerService, useValue: jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']) },
        { provide: CommonService, useValue: { sendLoadingMessage: { next: jasmine.createSpy('next') } } },
        { provide: LocalStorageService, useValue: jasmine.createSpyObj('LocalStorageService', ['getData', 'setdata']) },
        { provide: GtmService, useValue: jasmine.createSpyObj('GtmService', ['hireMeGTMEvent']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutAyushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeComponent } from './home.component';
import { CommonService } from 'src/app/Shared/Service/common.service';
import { UpperCasePipe } from 'src/app/upper-case.pipe';
import { ChipMarqueeComponent } from 'src/app/Shared/Component/chip-marquee/chip-marquee.component';
import { HighlightsSectionComponent } from 'src/app/Shared/Component/highlights-section/highlights-section.component';
import { ContactScrollService } from 'src/app/Shared/Service/contact-scroll.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, UpperCasePipe, ChipMarqueeComponent, HighlightsSectionComponent],
      imports: [FormsModule, TranslateModule.forRoot()],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
        ContactScrollService,
        { provide: CommonService, useValue: { sendLoadingMessage: { next: jasmine.createSpy('next') } } },
        { provide: NgxSpinnerService, useValue: jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

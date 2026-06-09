import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from './loader.component';
import { CommonService } from 'src/app/Shared/Service/common.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NgxSpinnerService,
          useValue: jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide', 'getSpinner']),
        },
        {
          provide: CommonService,
          useValue: {
            sendLoadingMessage: {
              next: jasmine.createSpy('next'),
              subscribe: jasmine.createSpy('subscribe'),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

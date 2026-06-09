import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDialogService } from './Component/On-Demand/common-modal/modal-dialog.service';
import { LocalStorageService } from './Shared/local-storage.service';
import { CommonService } from './Shared/Service/common.service';
import { GtmService } from './Shared/Service/gtm.service';
import { TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let modalService: jasmine.SpyObj<ModalDialogService>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    modalService = jasmine.createSpyObj('ModalDialogService', ['openModal']);
    localStorageService = jasmine.createSpyObj('LocalStorageService', ['getData', 'setdata']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NgxSpinnerService, useValue: jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']) },
        { provide: ModalDialogService, useValue: modalService },
        { provide: LocalStorageService, useValue: localStorageService },
        { provide: CommonService, useValue: {} },
        { provide: TranslateService, useValue: jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']) },
        { provide: GtmService, useValue: jasmine.createSpyObj('GtmService', ['initGTM']) },
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set isShow to true when scrolling down past topPosToStartShowing', () => {
    spyOnProperty(window, 'pageYOffset', 'get').and.returnValue(component.topPosToStartShowing + 1);
    component.checkScroll();
    expect(component.isShow).toBeTrue();
  });

  it('should set isShow to false when scrolling above topPosToStartShowing', () => {
    spyOnProperty(window, 'pageYOffset', 'get').and.returnValue(component.topPosToStartShowing - 1);
    component.checkScroll();
    expect(component.isShow).toBeFalse();
  });

  it('should open modal after launch if dontShowThisAgain is not true', fakeAsync(() => {
    localStorageService.getData.and.returnValue(null);
    component.ngOnInit();
    tick(100);
    expect(modalService.openModal).toHaveBeenCalled();
  }));

  it('should not open modal if dontShowThisAgain is true', fakeAsync(() => {
    localStorageService.getData.and.returnValue('true');
    component.ngOnInit();
    tick(100);
    expect(modalService.openModal).not.toHaveBeenCalled();
  }));
});

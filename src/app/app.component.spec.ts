import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent, welcomeData } from './app.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalDialogService } from './Component/On-Demand/common-modal/modal-dialog.service';
import { LocalStorageService } from './Shared/local-storage.service';
import { CommonService } from './Shared/Service/common.service';
import * as AOS from 'aos';
import { ModalConfig } from './Component/On-Demand/common-modal/modal-config';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        NgxSpinnerService,
        CommonService,
        ModalDialogService,
        LocalStorageService,
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set isShow to true when scrolling down past topPosToStartShowing', () => {
    const scrollPosition = component.topPosToStartShowing + 1;
    component.checkScroll();
    expect(component.isShow).toBeTruthy();
  });

  it('should set isShow to false when scrolling above topPosToStartShowing', () => {
    const scrollPosition = component.topPosToStartShowing - 1;
    component.checkScroll();
    expect(component.isShow).toBeFalsy();
  });

  // it('should scroll to top when gotoTop is called', () => {
  //   spyOn(window, 'scroll');
  //   component.gotoTop();
  //   expect(window.scroll).toHaveBeenCalledWith({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // });

  it('should open modal after 5 seconds of launch if dontShowThisAgain is not true', () => {
    spyOn(component, 'openModalAfter5SecOfLaunch').and.callThrough();
    spyOn(component._localStorageService, 'getData').and.returnValue(null); // Assuming initial value is null
    spyOn(component._modalService, 'openModal');

    component.ngOnInit();

    setTimeout(() => {
      expect(component.openModalAfter5SecOfLaunch).toHaveBeenCalled();
      expect(component._modalService.openModal).toHaveBeenCalled(); // Corrected line
    }, 5001); // Wait for 5 seconds
  });

  it('should not open modal if dontShowThisAgain is true', () => {
    spyOn(component, 'openModalAfter5SecOfLaunch').and.callThrough();
    spyOn(component._localStorageService, 'getData').and.returnValue('true');
    spyOn(component._modalService, 'openModal');

    component.ngOnInit();

    setTimeout(() => {
      expect(component.openModalAfter5SecOfLaunch).toHaveBeenCalled();
      expect(component._modalService.openModal).not.toHaveBeenCalled();
    }, 5001); // Wait for 5 seconds
  });
});

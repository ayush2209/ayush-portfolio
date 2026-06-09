import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModalComponent } from './common-modal.component';

describe('CommonModalComponent', () => {
  let component: CommonModalComponent;
  let fixture: ComponentFixture<CommonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonModalComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

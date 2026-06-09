import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightsSectionComponent } from './highlights-section.component';

describe('HighlightsSectionComponent', () => {
  let component: HighlightsSectionComponent;
  let fixture: ComponentFixture<HighlightsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightsSectionComponent],
      imports: [TranslateModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightsSectionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('stats', [
      { icon: 'fa-calendar', value: '6.8', labelKey: 'Stat_Years_Label' }
    ]);
    fixture.componentRef.setInput('pillars', [
      { icon: 'fa-rocket', titleKey: 'Highlight_Delivery_Title', bodyKey: 'Highlight_Delivery_Body' }
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

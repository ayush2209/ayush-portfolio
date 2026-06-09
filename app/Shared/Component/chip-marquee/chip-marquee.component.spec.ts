import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ChipMarqueeComponent } from './chip-marquee.component';

describe('ChipMarqueeComponent', () => {
  let component: ChipMarqueeComponent;
  let fixture: ComponentFixture<ChipMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipMarqueeComponent],
      imports: [TranslateModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChipMarqueeComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('rows', [
      {
        items: [
          { type: 'category', labelKey: 'Skills_Core' },
          { type: 'skill', label: 'Angular' }
        ]
      }
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

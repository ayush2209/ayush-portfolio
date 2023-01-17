import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAyushComponent } from './about-ayush.component';

describe('AboutAyushComponent', () => {
  let component: AboutAyushComponent;
  let fixture: ComponentFixture<AboutAyushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAyushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAyushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ExperienceService } from 'src/app/Shared/Service/experience.service';
import { DEFAULT_EXPERIENCE_DATA } from 'src/assets/Common/projectDetails';
import { TechnologyComponent } from './technology.component';

describe('TechnologyComponent', () => {
  let component: TechnologyComponent;
  let fixture: ComponentFixture<TechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyComponent ],
      imports: [TranslateModule.forRoot()],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ExperienceService,
          useValue: {
            getExperience: jasmine.createSpy('getExperience').and.returnValue(of(DEFAULT_EXPERIENCE_DATA))
          }
        },
        TranslateService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

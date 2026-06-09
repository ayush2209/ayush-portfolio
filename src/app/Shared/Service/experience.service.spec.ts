import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DEFAULT_EXPERIENCE_DATA } from 'src/assets/Common/projectDetails';
import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), ExperienceService]
    });
    service = TestBed.inject(ExperienceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return firebase data when available', () => {
    const remoteData = {
      title: 'Remote Title',
      subtitle: 'Remote subtitle',
      highlights: ['One'],
      company: DEFAULT_EXPERIENCE_DATA.company
    };

    service.getExperience('en').subscribe((data) => {
      expect(data.title).toBe('Remote Title');
    });

    const req = httpMock.expectOne((request) => request.url.includes('/experience/en.json'));
    req.flush(remoteData);
  });

  it('should fall back to local seed data when firebase returns null', () => {
    service.getExperience('en').subscribe((data) => {
      expect(data.title).toBe(DEFAULT_EXPERIENCE_DATA.title);
    });

    const req = httpMock.expectOne((request) => request.url.includes('/experience/en.json'));
    req.flush(null);
  });
});

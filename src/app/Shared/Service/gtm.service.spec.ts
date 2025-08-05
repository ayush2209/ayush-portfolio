import { TestBed } from '@angular/core/testing';

import { GtmService } from './gtm.service';

describe('GtmService', () => {
  let service: GtmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize GTM', () => {
    spyOn(document, 'createElement').and.returnValue(document.createElement('script'));
    spyOn(document.head, 'appendChild');
    
    service.initGTM();
    
    expect(document.createElement).toHaveBeenCalledWith('script');
    expect(document.head.appendChild).toHaveBeenCalled();
  });

  it('should push events to dataLayer', () => {
    (window as any).dataLayer = [];
    
    service.pushEvent('test_event', { test: 'data' });
    
    expect((window as any).dataLayer.length).toBeGreaterThan(0);
  });
});

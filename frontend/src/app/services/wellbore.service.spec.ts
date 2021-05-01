import { TestBed } from '@angular/core/testing';

import { WellboreService } from './wellbore.service';

describe('WellboreService', () => {
  let service: WellboreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WellboreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

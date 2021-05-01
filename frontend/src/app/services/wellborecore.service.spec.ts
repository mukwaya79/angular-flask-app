import { TestBed } from '@angular/core/testing';

import { WellborecoreService } from './wellborecore.service';

describe('WellborecoreService', () => {
  let service: WellborecoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WellborecoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

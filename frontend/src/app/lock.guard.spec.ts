import { TestBed } from '@angular/core/testing';

import { LockGuard } from './lock.guard';

describe('LockGuard', () => {
  let guard: LockGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LockGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

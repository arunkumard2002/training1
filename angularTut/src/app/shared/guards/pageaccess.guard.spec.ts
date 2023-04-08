import { TestBed } from '@angular/core/testing';

import { PageaccessGuard } from './pageaccess.guard';

describe('PageaccessGuard', () => {
  let guard: PageaccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageaccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

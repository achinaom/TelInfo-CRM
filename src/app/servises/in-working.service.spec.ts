import { TestBed } from '@angular/core/testing';

import { InWorkingService } from './in-working.service';

describe('InWorkingService', () => {
  let service: InWorkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InWorkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

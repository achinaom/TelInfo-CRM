import { TestBed } from '@angular/core/testing';

import { SessionSService } from './session-s.service';

describe('SessionSService', () => {
  let service: SessionSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

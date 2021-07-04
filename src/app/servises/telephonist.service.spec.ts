import { TestBed } from '@angular/core/testing';

import { TelephonistService } from './telephonist.service';

describe('TelephonistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelephonistService = TestBed.get(TelephonistService);
    expect(service).toBeTruthy();
  });
});

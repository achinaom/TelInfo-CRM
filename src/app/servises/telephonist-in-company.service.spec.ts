import { TestBed } from '@angular/core/testing';

import { TelephonistInCompanyService } from './telephonist-in-company.service';

describe('TelephonistInCompanyService', () => {
  let service: TelephonistInCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelephonistInCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

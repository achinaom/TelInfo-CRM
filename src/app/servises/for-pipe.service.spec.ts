import { TestBed } from '@angular/core/testing';

import { ForPipeService } from './for-pipe.service';

describe('ForPipeService', () => {
  let service: ForPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

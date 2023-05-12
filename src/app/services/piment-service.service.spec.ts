import { TestBed } from '@angular/core/testing';

import { PimentServiceService } from './piment-service.service';

describe('PimentServiceService', () => {
  let service: PimentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PimentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PhbserviceService } from './phbservice.service';

describe('PhbserviceService', () => {
  let service: PhbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Ex18CustomerService } from './ex18-customer.service';

describe('Ex18CustomerService', () => {
  let service: Ex18CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex18CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

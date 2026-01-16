import { TestBed } from '@angular/core/testing';

import { Ex13ProductService } from './ex13-product.service';

describe('Ex13ProductService', () => {
  let service: Ex13ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex13ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

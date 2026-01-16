import { TestBed } from '@angular/core/testing';

import { Ex14CatalogService } from './ex14-catalog.service';

describe('Ex14CatalogService', () => {
  let service: Ex14CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex14CatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

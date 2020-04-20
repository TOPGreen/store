import { TestBed } from '@angular/core/testing';

import { ItemsApiService } from './items-api.service';

describe('ItemsApiService', () => {
  let service: ItemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

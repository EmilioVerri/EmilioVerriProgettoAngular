import { TestBed } from '@angular/core/testing';

import { ShopsFacadeService } from './shops-facade.service';

describe('ShopsFacadeService', () => {
  let service: ShopsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

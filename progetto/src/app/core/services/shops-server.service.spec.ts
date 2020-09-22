import { TestBed } from '@angular/core/testing';

import { ShopsServerService } from './shops-server.service';

describe('ShopsServerService', () => {
  let service: ShopsServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopsServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

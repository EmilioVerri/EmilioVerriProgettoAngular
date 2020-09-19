import { TestBed } from '@angular/core/testing';

import { AutenticazioneFacadeService } from './autenticazione-facade.service';

describe('AutenticazioneFacadeService', () => {
  let service: AutenticazioneFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticazioneFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

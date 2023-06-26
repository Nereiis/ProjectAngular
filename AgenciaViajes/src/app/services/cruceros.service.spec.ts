import { TestBed } from '@angular/core/testing';

import { CrucerosService } from './cruceros.service';

describe('CrucerosService', () => {
  let service: CrucerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrucerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

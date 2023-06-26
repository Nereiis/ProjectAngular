import { TestBed } from '@angular/core/testing';

import { EscapadasService } from './escapadas.service';

describe('EscapadasService', () => {
  let service: EscapadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscapadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

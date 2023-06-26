import { TestBed } from '@angular/core/testing';

import { SpasService } from './spas.service';

describe('SpasService', () => {
  let service: SpasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

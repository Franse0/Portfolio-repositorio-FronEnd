import { TestBed } from '@angular/core/testing';

import { EducacionServiciosService } from './educacion.service';

describe('EducacionServiciosService', () => {
  let service: EducacionServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

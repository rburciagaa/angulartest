import { TestBed } from '@angular/core/testing';

import { GlobalAlumnosService } from './global-alumnos.service';

describe('GlobalAlumnosService', () => {
  let service: GlobalAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

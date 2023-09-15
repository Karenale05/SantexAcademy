import { TestBed } from '@angular/core/testing';

import { VistaArticuloService } from './vista-articulo.service';

describe('VistaArticuloService', () => {
  let service: VistaArticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

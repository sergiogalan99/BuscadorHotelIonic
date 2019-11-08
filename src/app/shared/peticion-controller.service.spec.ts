import { TestBed } from '@angular/core/testing';

import { PeticionControllerService } from './peticion-controller.service';

describe('PeticionControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeticionControllerService = TestBed.get(PeticionControllerService);
    expect(service).toBeTruthy();
  });
});

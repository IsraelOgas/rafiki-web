import { TestBed, inject } from '@angular/core/testing';

import { PlanDeEstudioService } from './plan-de-estudio.service';

describe('PlanDeEstudioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanDeEstudioService]
    });
  });

  it('should be created', inject([PlanDeEstudioService], (service: PlanDeEstudioService) => {
    expect(service).toBeTruthy();
  }));
});

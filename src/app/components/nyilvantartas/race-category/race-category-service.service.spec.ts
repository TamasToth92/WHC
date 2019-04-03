import { TestBed } from '@angular/core/testing';

import { RaceCategoryServiceService } from './race-category-service.service';

describe('RaceCategoryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaceCategoryServiceService = TestBed.get(RaceCategoryServiceService);
    expect(service).toBeTruthy();
  });
});

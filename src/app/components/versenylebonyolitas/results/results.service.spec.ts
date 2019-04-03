import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';

describe('RacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultsService = TestBed.get(ResultsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RaceResultsService } from './race-results.service';

describe('RaceResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaceResultsService = TestBed.get(RaceResultsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StartNumberService } from './start-number.service';

describe('StartNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartNumberService = TestBed.get(StartNumberService);
    expect(service).toBeTruthy();
  });
});

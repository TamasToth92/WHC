import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HorseService } from './horse.service';

describe('HorseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: HorseService = TestBed.get(HorseService);
    expect(service).toBeTruthy();
  });
});
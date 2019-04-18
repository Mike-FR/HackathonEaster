import { TestBed } from '@angular/core/testing';

import { EggApiService } from './egg-api.service';

describe('EggApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EggApiService = TestBed.get(EggApiService);
    expect(service).toBeTruthy();
  });
});

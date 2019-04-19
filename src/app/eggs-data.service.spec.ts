import { TestBed } from '@angular/core/testing';

import { EggsDataService } from './eggs-data.service';

describe('EggsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EggsDataService = TestBed.get(EggsDataService);
    expect(service).toBeTruthy();
  });
});

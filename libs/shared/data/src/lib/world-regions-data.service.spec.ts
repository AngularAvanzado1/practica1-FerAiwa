import { TestBed } from '@angular/core/testing';

import { WorldRegionsDataService } from './world-regions-data.service';

describe('WorldRegionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldRegionsDataService = TestBed.get(
      WorldRegionsDataService
    );
    expect(service).toBeTruthy();
  });
});

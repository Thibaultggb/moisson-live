import { TestBed } from '@angular/core/testing';

import { RapeseedService } from './rapeseed.service';

describe('RapeseedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RapeseedService = TestBed.get(RapeseedService);
    expect(service).toBeTruthy();
  });
});

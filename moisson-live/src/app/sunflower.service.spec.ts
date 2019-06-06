import { TestBed } from '@angular/core/testing';

import { SunflowerService } from './sunflower.service';

describe('SunflowerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SunflowerService = TestBed.get(SunflowerService);
    expect(service).toBeTruthy();
  });
});

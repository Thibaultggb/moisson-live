import { TestBed } from '@angular/core/testing';

import { BarleyServiceService } from './barley-service.service';

describe('BarleyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarleyServiceService = TestBed.get(BarleyServiceService);
    expect(service).toBeTruthy();
  });
});

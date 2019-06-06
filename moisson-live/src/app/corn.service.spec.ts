import { TestBed } from '@angular/core/testing';

import { CornService } from './corn.service';

describe('CornService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CornService = TestBed.get(CornService);
    expect(service).toBeTruthy();
  });
});

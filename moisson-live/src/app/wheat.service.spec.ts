import { TestBed } from '@angular/core/testing';

import { WheatService } from './wheat.service';

describe('WheatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WheatService = TestBed.get(WheatService);
    expect(service).toBeTruthy();
  });
});

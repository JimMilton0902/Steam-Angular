import { TestBed } from '@angular/core/testing';

import { DmspService } from './dmsp.service';

describe('DmspService', () => {
  let service: DmspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

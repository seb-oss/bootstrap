import { TestBed } from '@angular/core/testing';

import { MobileDetectService } from './mobile-detect.service';

describe('MobileDetectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileDetectService = TestBed.get(MobileDetectService);
    expect(service).toBeTruthy();
  });
});

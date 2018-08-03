import { TestBed, inject } from '@angular/core/testing';

import { WindowRef } from './window-ref.service';

describe('WindowRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowRef]
    });
  });

  it('should be created', inject([WindowRef], (service: WindowRef) => {
    expect(service).toBeTruthy();
  }));
});

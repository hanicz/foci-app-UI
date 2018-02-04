import { TestBed, inject } from '@angular/core/testing';

import { TippService } from './tipp.service';

describe('TippService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TippService]
    });
  });

  it('should be created', inject([TippService], (service: TippService) => {
    expect(service).toBeTruthy();
  }));
});

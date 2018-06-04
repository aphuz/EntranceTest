import { TestBed, inject } from '@angular/core/testing';

import { KindService } from './services/kind.service';

describe('KindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KindService]
    });
  });

  it('should be created', inject([KindService], (service: KindService) => {
    expect(service).toBeTruthy();
  }));
});

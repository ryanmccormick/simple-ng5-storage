import { TestBed, inject } from '@angular/core/testing';

import { StorageWindowRefService } from './storage-window-ref.service';

describe('StorageWindowRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageWindowRefService]
    });
  });

  it('should be created', inject([StorageWindowRefService], (service: StorageWindowRefService) => {
    expect(service).toBeTruthy();
  }));
});

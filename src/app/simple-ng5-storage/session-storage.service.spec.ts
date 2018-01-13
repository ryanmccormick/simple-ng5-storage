import { TestBed, inject } from '@angular/core/testing';

import { SNG5SessionStorageService } from './session-storage.service';
import { StorageWindowRefService } from './storage-window-ref.service';

describe('SessionStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SNG5SessionStorageService, StorageWindowRefService]
    });
  });

  it('should be created', inject([SNG5SessionStorageService], (service: SNG5SessionStorageService) => {
    expect(service).toBeTruthy();
  }));
});

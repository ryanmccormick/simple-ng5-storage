import { TestBed, inject } from '@angular/core/testing';

import { SNG5LocalStorageService } from './local-storage.service';
import { StorageWindowRefService } from './storage-window-ref.service';

describe('LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SNG5LocalStorageService, StorageWindowRefService]
    });
  });

  it('should be created', inject([SNG5LocalStorageService], (service: SNG5LocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});

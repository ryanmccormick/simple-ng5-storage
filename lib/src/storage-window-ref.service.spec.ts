import { TestBed, getTestBed } from '@angular/core/testing';

import { StorageWindowRefService } from './storage-window-ref.service';

describe('StorageWindowRefService', () => {
  let injector: TestBed;
  let service: StorageWindowRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageWindowRefService]
    });

    injector = getTestBed();
    service = injector.get(StorageWindowRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('StorageWindowRefService#nativewindow', () => {
    it('should be defined', () => {
      expect(service.nativewindow).toBeDefined();
    });

    it('should return an instance of window', () => {
      expect(service.nativewindow instanceof Window).toBeTruthy();
    });

  });

});

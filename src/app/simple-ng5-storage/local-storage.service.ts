import { Injectable } from '@angular/core';

import { StorageWindowRefService } from './storage-window-ref.service';
import { LocalStorageMessage } from './shared/local-storage.message';
import { BaseStorageService } from './shared/base-storage.service';
import { LocalStorageType } from './shared/local-storage.type';

@Injectable()
export class SNG5LocalStorageService extends BaseStorageService {

  window: Window;
  storageType: string;

  constructor(private storageWindowRef: StorageWindowRefService) {
    super();
    this.storageType = LocalStorageType.LOCALSTORAGE;

    try {
      this.window = storageWindowRef.nativewindow;
    } catch (exception) {
      console.error(`${LocalStorageMessage.WINDOW_UNAVAILABLE} EXCEPTION::`, exception);
    }
  }
}

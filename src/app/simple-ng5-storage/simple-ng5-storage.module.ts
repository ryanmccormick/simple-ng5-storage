import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageWindowRefService } from './storage-window-ref.service';
import { SNG5LocalStorageService } from './local-storage.service';
import { SNG5SessionStorageService } from './session-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    StorageWindowRefService, SNG5LocalStorageService, SNG5SessionStorageService
  ]
})
export class SimpleNg5StorageModule { }

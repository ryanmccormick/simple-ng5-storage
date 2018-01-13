import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleNg5StorageModule } from './simple-ng5-storage/simple-ng5-storage.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleNg5StorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

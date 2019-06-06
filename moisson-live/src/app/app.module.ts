import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    MapComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

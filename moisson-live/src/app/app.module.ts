import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { PictureComponent } from './picture/picture.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    MapComponent,
    HeaderComponent,
    PictureComponent,
    FormComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

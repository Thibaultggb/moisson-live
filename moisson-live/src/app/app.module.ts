import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
//import { ComparatorComponent } from './comparator/comparator.component';

import { FormComponent } from './form/form.component';

import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { PictureComponent } from './picture/picture.component';


@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    MapComponent,
    //ComparatorComponent,
   // ChartsModule,
    FormComponent


    FooterComponent,

    MapComponent,
    HeaderComponent,
    PictureComponent
    MapComponent


    MapComponent


  ],
  imports: [
    BrowserModule,

    FormsModule

    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

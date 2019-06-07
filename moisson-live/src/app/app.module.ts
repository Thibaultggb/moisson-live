import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

//import { ComparatorComponent } from './comparator/comparator.component';


import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { PictureComponent } from './picture/picture.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  { 'path' : 'map', component : MapComponent, "pathMatch": "full"},
  { 'path': 'form', component : FormComponent, "pathMatch": "full"},
  {'path': '', component: MapComponent, "pathMatch": "full"}
]


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
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

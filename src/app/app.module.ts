import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfsuiLibModule } from 'ofsui-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OfsuiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

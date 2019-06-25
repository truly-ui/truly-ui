import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule, en_US, ToasterModule } from 'truly-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    CoreModule.forRoot({
      theme: 'default',
      language: en_US
    }),
    ToasterModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

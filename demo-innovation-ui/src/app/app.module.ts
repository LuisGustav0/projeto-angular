import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InnovationUiModule } from './../../projects/innovation-ui/src/lib/module/innovation-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InnovationUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

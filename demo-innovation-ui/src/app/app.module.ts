import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InnovationUiModule } from './../../projects/innovation-ui/src/lib/innovation-ui.module';
import { InnovationUiService } from './../../projects/innovation-ui/src/lib/innovation-ui.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InnovationUiModule
  ],
  providers: [
    InnovationUiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

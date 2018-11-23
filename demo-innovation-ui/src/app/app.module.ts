import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { InnovationUiModule } from './../../projects/innovation-ui/src/lib/module/innovation-ui.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    InnovationUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

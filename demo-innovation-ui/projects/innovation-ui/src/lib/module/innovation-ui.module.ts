import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule  
} from '@angular/material';

import { IndexComponent } from './components/index/index.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    IndexComponent,
    InputTextComponent,
    ButtonComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    IndexComponent,
    InputTextComponent,
    ButtonComponent
  ]
})
export class InnovationUiModule { }

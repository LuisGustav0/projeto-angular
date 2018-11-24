import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { IndexComponent } from './components/index/index.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/index/header/header.component';

@NgModule({
  declarations: [
    IndexComponent,
    InputTextComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    IndexComponent,
    InputTextComponent,
    ButtonComponent
  ]
})
export class InnovationUiModule { }

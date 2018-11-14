import { NgModule } from '@angular/core';

import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    InputTextComponent,
    ButtonComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    InputTextComponent,
    ButtonComponent
  ]
})
export class InnovationUiModule { }

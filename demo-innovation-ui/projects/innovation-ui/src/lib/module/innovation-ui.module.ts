import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';

import { FormCrudComponent } from './components/form-crud/form-crud.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    FormCrudComponent,
    InputTextComponent,
    ButtonComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    FormCrudComponent,
    InputTextComponent,
    ButtonComponent
  ]
})
export class InnovationUiModule { }

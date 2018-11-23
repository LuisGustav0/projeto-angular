import { NgModule } from '@angular/core';

import { IndexComponent } from './components/index/index.component';
import { InputTextComponent } from './components/input-text/input-text.component';

@NgModule({
  declarations: [
    IndexComponent,
    InputTextComponent
  ],
  imports: [
  ],
  exports: [
    IndexComponent,
    InputTextComponent
  ]
})
export class InnovationUiModule { }

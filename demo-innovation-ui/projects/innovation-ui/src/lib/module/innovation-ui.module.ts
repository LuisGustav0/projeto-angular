import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MenuListItemComponent } from './components/index/menu-list-item/menu-list-item.component';

import { NavService } from './components/index/base/nav.service';

@NgModule({
  declarations: [
    IndexComponent,
    InputTextComponent,
    ButtonComponent,
    HeaderComponent,
    MenuListItemComponent
  ],
  imports: [
    CommonModule,
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
  ],
  providers: [
    NavService
  ]
})
export class InnovationUiModule { }

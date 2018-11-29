import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

import { IndexComponent } from './components/index/index.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/index/header/header.component';
import { MenuListItemComponent } from './components/index/menu-list-item/menu-list-item.component';

import { NavService } from './components/index/base/nav.service';
import { IndexModuleComponent } from './components/index-module/index-module.component';

@NgModule({
  declarations: [
    IndexComponent,
    InputTextComponent,
    ButtonComponent,
    HeaderComponent,
    MenuListItemComponent,
    IndexModuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule
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

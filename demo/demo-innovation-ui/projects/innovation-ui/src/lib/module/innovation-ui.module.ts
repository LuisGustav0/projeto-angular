import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

import {
  TableModule
} from 'primeng/table';

import { IndexComponent } from './components/index/index.component';
import { IndexModuleComponent } from './components/index-module/index-module.component';
import { HeaderComponent } from './components/index/header/header.component';
import { MenuListItemComponent } from './components/index/menu-list-item/menu-list-item.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { CrudComponent } from './components/crud/crud.component';

import { NavService } from './components/index/base/nav.service';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    IndexComponent,
    IndexModuleComponent,
    HeaderComponent,
    MenuListItemComponent,
    InputTextComponent,
    CrudComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    TableModule
  ],
  exports: [
    IndexComponent,
    IndexModuleComponent,
    HeaderComponent,
    MenuListItemComponent,
    InputTextComponent,
    CrudComponent,
    SearchComponent
  ],
  providers: [
    NavService
  ]
})
export class InnovationUiModule { }

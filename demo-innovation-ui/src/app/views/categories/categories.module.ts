import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CadastroCategoriesComponent } from './cadastro-categories/cadastro-categories.component';
import { PesquisaCategoriesComponent } from './pesquisa-categories/pesquisa-categories.component';

@NgModule({
  declarations: [
    CadastroCategoriesComponent,
    PesquisaCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CategoriesModule { }

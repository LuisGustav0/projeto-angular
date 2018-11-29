import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CadastroCategoriesComponent } from './cadastro-categories/cadastro-categories.component';
import { PesquisaCategoriesComponent } from './pesquisa-categories/pesquisa-categories.component';

@NgModule({
  declarations: [CadastroCategoriesComponent, PesquisaCategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }

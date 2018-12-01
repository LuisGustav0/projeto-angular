import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { InnovationUiModule } from './../../../../projects/innovation-ui/src/lib/module/innovation-ui.module';

import { CadastroCategoriesComponent } from './cadastro-categories/cadastro-categories.component';
import { PesquisaCategoriesComponent } from './pesquisa-categories/pesquisa-categories.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    InnovationUiModule
  ],
  declarations: [
    CadastroCategoriesComponent,
    PesquisaCategoriesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesModule { }

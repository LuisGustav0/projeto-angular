import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCategoriesComponent } from './cadastro-categories/cadastro-categories.component';
import { PesquisaCategoriesComponent } from './pesquisa-categories/pesquisa-categories.component';

const routes: Routes = [
  {
    path: 'cadastro-categories',
    component: CadastroCategoriesComponent
  },
  {
    path: 'pesquisa-categories',
    component: PesquisaCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

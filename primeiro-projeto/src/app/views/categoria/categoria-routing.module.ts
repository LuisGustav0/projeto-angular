import { NgModule } from '@angular/core';
import { 
  Routes, 
  RouterModule 
} from '@angular/router';

import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisaCategoriaComponent
  },
  {
    path: 'cadastro-categoria',
    component: CadastroCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }

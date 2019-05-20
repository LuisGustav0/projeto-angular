import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';

const routes: Routes = [
  {
    path: 'pesquisa-pessoa',
    component: PesquisaPessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }

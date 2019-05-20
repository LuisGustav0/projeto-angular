import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/categoria/categoria.module#CategoriaModule'
  },
  {
    path: '',
    loadChildren: './views/pessoa/pessoa.module#PessoaModule'
  },
  {
    path: 'data-binding',
    loadChildren: './views/data-binding/data-binding.module#DataBindingModule'
  },
  {
    path: 'directiva',
    loadChildren: './views/directiva/directiva.module#DirectivaModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

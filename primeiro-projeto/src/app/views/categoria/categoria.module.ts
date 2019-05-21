import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CoreModule } from 'src/app/base/core/core.module';

import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    CoreModule
  ],
  declarations: [
    PesquisaCategoriaComponent,
    CadastroCategoriaComponent
  ]
})
export class CategoriaModule { }

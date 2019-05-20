import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ArquiteturaModule } from 'src/app/arquitetura/arquitetura.module';

import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ArquiteturaModule
  ],
  declarations: [
    PesquisaCategoriaComponent,
    CadastroCategoriaComponent
  ]
})
export class CategoriaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';
import { ArquiteturaModule } from 'src/app/arquitetura/arquitetura.module';

@NgModule({
  imports: [
    CommonModule,
    ArquiteturaModule,
    PessoaRoutingModule
  ],
  declarations: [PesquisaPessoaComponent]
})
export class PessoaModule { }

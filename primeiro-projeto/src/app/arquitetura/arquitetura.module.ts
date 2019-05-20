import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule
} from '@angular/material';

import { TableModule } from 'primeng/table';

import { CardComponent } from './card/card.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    TableModule
  ],
  declarations: [
    CardComponent,
    CadastroComponent,
    PesquisaComponent,
    TableComponent
  ],
  exports: [
    CardComponent,
    CadastroComponent,
    PesquisaComponent
  ]
})
export class ArquiteturaModule { }

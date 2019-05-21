import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { CardComponent } from './card/card.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    TableModule,
    ButtonModule,
    MatDividerModule
  ],
  declarations: [
    CardComponent,
    CadastroComponent,
    PesquisaComponent,
    TableComponent,
    InputComponent
  ],
  exports: [
    CardComponent,
    CadastroComponent,
    PesquisaComponent,
    InputComponent
  ]
})
export class ArquiteturaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './database/in-memory-database';

import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { CardComponent } from './components/card/card.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { TableComponent } from './components/table/table.component';
import { InputTextComponent } from './components/input-text/input-text.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    FormsModule,

    // Angular Material
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
    InputTextComponent
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    // Components
    CardComponent,
    CadastroComponent,
    PesquisaComponent,
    InputTextComponent
  ]
})
export class CoreModule { }

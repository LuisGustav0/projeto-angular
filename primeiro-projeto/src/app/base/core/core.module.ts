import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './database/in-memory-database';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule
} from '@angular/material';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { IndexComponent } from './components/index/index.component';
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
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TableModule,
    ButtonModule,
    MatDividerModule
  ],
  declarations: [
    CardComponent,
    CadastroComponent,
    PesquisaComponent,
    TableComponent,
    InputTextComponent,
    IndexComponent
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    // Components
    IndexComponent,
    CardComponent,
    CadastroComponent,
    PesquisaComponent,
    InputTextComponent
  ]
})
export class CoreModule { }

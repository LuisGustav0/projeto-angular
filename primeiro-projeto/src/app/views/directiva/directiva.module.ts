import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivaRoutingModule } from './directiva-routing.module';

import {
  MatCardModule,
  MatButtonModule
} from '@angular/material';

import { ArquiteturaModule } from 'src/app/arquitetura/arquitetura.module';

import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CardNgForComponent } from './card-ng-for/card-ng-for.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivaRoutingModule,
    MatCardModule,
    MatButtonModule,
    ArquiteturaModule
  ],
  declarations: [
    NgIfComponent,
    NgForComponent,
    CardNgForComponent
  ]
})
export class DirectivaModule { }

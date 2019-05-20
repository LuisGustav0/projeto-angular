import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { 
  MatCardModule, 
  MatButtonModule 
} from '@angular/material';

import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { VariavelReferenciaComponent } from './variavel-referencia/variavel-referencia.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataBindingRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    InterpolacaoComponent,
    EventBindingComponent,
    VariavelReferenciaComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent
  ]
})
export class DataBindingModule { }

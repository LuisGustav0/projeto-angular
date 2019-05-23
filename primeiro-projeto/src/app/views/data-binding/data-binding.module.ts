import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/base/core/core.module';

import { DataBindingRoutingModule } from './data-binding-routing.module';

import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { VariavelReferenciaComponent } from './variavel-referencia/variavel-referencia.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
  imports: [
    CoreModule,
    DataBindingRoutingModule
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

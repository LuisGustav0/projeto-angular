import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { VariavelReferenciaComponent } from './variavel-referencia/variavel-referencia.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  {
    path: 'interpolacao',
    component: InterpolacaoComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'variavel-referencia',
    component: VariavelReferenciaComponent
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'two-way-data-binding',
    component: TwoWayDataBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }

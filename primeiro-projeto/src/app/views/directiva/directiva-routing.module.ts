import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CardNgForComponent } from './card-ng-for/card-ng-for.component';

const routes: Routes = [
  {
    path: 'ng-if',
    component: NgIfComponent
  },
  {
    path: 'ng-for',
    component: NgForComponent
  },
  {
    path: 'card-ng-for',
    component: CardNgForComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivaRoutingModule { }

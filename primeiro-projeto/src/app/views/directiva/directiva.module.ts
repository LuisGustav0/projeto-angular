import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/base/core/core.module';

import { DirectivaRoutingModule } from './directiva-routing.module';

import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CardNgForComponent } from './card-ng-for/card-ng-for.component';

@NgModule({
  imports: [
    CoreModule,
    DirectivaRoutingModule
  ],
  declarations: [
    NgIfComponent,
    NgForComponent,
    CardNgForComponent
  ]
})
export class DirectivaModule { }

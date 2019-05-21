import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/base/core/core.module';
import { CategoriaRoutingModule } from './categoria-routing.module';

import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';

@NgModule({
  imports: [
    CoreModule,
    CategoriaRoutingModule
  ],
  declarations: [
    PesquisaCategoriaComponent,
    CadastroCategoriaComponent
  ]
})
export class CategoriaModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionarioCardComponent } from './funcionario/funcionario-card/funcionario-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    BemVindoComponent,
    JumbotronComponent,
    FuncionarioComponent,
    FuncionarioCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

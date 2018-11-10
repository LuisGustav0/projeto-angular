import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    BemVindoComponent,
    JumbotronComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

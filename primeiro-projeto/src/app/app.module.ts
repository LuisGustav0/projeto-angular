import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

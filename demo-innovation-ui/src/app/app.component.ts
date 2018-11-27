import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listaMenu = [
    {
      title: 'Categorias',
      children: [
        {
          title: 'Pesquisa Categorias'
        },
        {
          title: 'Cadastro Categorias'
        }
      ]
    },
    {
      title: 'Clientes',
      children: [
        {
          title: 'Pesquisa Clientes'
        },
        {
          title: 'Cadastro Clientes'
        }
      ]
    },
    {
      title: 'Teste'
    }
  ];
}

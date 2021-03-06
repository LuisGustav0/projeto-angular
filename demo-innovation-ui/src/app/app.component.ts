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
      icon: 'home',
      route: '',
      children: [
        {
          title: 'Pesquisa Categorias',
          route: 'pesquisa-categories'
        },
        {
          title: 'Cadastro Categorias',
          route: 'cadastro-categories'
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

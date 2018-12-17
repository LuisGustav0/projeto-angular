import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-categories',
  templateUrl: './pesquisa-categories.component.html',
  styleUrls: ['./pesquisa-categories.component.scss']
})
export class PesquisaCategoriesComponent implements OnInit {

  listaCategories = [
    {
      id: 1,
      description: 'Teste descrição 1 '
    },
    {
      id: 1,
      description: 'Descrição 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

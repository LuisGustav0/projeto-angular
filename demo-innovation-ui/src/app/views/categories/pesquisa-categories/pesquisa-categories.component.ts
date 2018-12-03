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
      descricao: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

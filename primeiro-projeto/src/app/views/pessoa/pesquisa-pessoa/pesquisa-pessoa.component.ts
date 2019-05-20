import { Component, OnInit } from '@angular/core';

import { Pessoa } from './../pessoa';

@Component({
  selector: 'app-pesquisa-pessoa',
  templateUrl: './pesquisa-pessoa.component.html',
  styleUrls: ['./pesquisa-pessoa.component.scss']
})
export class PesquisaPessoaComponent implements OnInit {
  listaPessoa: Pessoa[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.listaPessoa = [
      { id: 1, nome: 'Teste', tipo: 'dasdas' }
    ];

    this.cols = [
      { header: 'Código', field: 'id' },
      { header: 'Nome', field: 'nome' },
      {header: 'Tipo', field: 'tipo'}
    ];
  }
}

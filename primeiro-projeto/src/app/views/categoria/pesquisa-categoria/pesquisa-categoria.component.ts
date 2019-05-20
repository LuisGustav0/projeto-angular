import {
  Component,
  OnInit
} from '@angular/core';

import { Categoria } from './../categoria';

@Component({
  selector: 'app-pesquisa-categoria',
  templateUrl: './pesquisa-categoria.component.html',
  styleUrls: ['./pesquisa-categoria.component.scss']
})
export class PesquisaCategoriaComponent implements OnInit {
  listaCategoria: Categoria[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.listaCategoria = [
      { id: 1, descricao: 'Teste' }
    ];

    this.cols = [
      { header: 'Código', field: 'id' },
      { header: 'Descrição', field: 'descricao' }
    ];
  }
}

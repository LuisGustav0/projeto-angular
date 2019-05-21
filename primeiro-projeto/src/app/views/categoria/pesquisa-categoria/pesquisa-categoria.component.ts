import {
  Component,
  OnInit
} from '@angular/core';

import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from './../shared/categoria.service';

@Component({
  selector: 'app-pesquisa-categoria',
  templateUrl: './pesquisa-categoria.component.html',
  styleUrls: ['./pesquisa-categoria.component.scss']
})
export class PesquisaCategoriaComponent implements OnInit {
  listaCategoria: Categoria[];
  cols: any[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.findAll()
      .subscribe(
        listaCategoria => this.listaCategoria = listaCategoria,
        error => alert('Erro ao carregar lista de categoria!')
      );

    this.cols = [
      { header: 'Código', field: 'id' },
      { header: 'Descrição', field: 'descricao' }
    ];
  }

  delete(categoria: Categoria) {
    const isDelete = confirm('Deseja realmente excluir categoria ' + categoria.id +
      ' - ' + categoria.descricao);

    if (!isDelete) {
      return;
    }

    this.categoriaService.delete(categoria.id)
      .subscribe(
        () => this.listaCategoria = this.listaCategoria.filter(element => element !== categoria),
        () => alert('Erro ao tentar excluir')
      );
  }
}

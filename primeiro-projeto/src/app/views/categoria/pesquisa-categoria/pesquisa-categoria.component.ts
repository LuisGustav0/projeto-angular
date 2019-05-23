import {
  Component,
  OnInit
} from '@angular/core';

import { CategoriaService } from '../shared/categoria.service';
import { Categoria } from '../shared/categoria.model';

@Component({
  selector: 'app-pesquisa-categoria',
  templateUrl: './pesquisa-categoria.component.html',
  styleUrls: ['./pesquisa-categoria.component.scss']
})
export class PesquisaCategoriaComponent implements OnInit {

  listaCategoria: Categoria[];

  constructor(public categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(
      listaCategoria => this.listaCategoria = listaCategoria,
      error => alert('Erro ao carregar a lista')
    );
  }
}

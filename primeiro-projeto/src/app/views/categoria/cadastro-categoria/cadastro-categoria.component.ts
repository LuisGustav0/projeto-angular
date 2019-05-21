import { Component } from '@angular/core';

import {
  CategoriaService,
  BaseCategoriaService
} from './../shared/categoria.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})
export class CadastroCategoriaComponent {
  service: BaseCategoriaService;

  constructor(private categoriaService: CategoriaService) {
    this.configBaseService();
  }

  configBaseService(): void {
    this.service = this.categoriaService.getBaseService();
  }
}

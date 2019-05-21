import { Component } from '@angular/core';

import { CategoriaService } from '../shared/categoria.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})
export class CadastroCategoriaComponent {
  constructor(private service: CategoriaService) {

  }
}

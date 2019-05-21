import {
  Component,
  OnInit
} from '@angular/core';

import { CategoriaService } from '../shared/categoria.service';

@Component({
  selector: 'app-pesquisa-categoria',
  templateUrl: './pesquisa-categoria.component.html',
  styleUrls: ['./pesquisa-categoria.component.scss']
})
export class PesquisaCategoriaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
      
  }
}

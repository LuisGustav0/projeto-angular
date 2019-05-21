import {
  Component,
  OnInit,
  AfterContentChecked,
  Input,
  ViewChild
} from '@angular/core';

import { Categoria } from './../../views/categoria/shared/categoria.model';
import { CategoriaService } from './../../views/categoria/shared/categoria.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @Input() titulo: string;

  @ViewChild('crudForm') crudForm: NgForm;

  categoria: Categoria = new Categoria();
  isSalvando: boolean;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
  }

  onSalvar() {
    console.log('Salvando...',  this.crudForm);
  }

  onExcluir() {
    console.log('Excluindo...');
  }

  delete(categoria: Categoria) {
    const isDelete = confirm('Deseja realmente excluir categoria ' + categoria.id +
      ' - ' + categoria.descricao);

    if (!isDelete) {
      return;
    }

    this.categoriaService.delete(categoria.id)
    .subscribe(
      () => this.categoria = {},
      () => alert('Erro ao tentar excluir')
    );
  }
}

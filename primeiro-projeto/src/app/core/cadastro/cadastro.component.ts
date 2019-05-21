import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';

import { Categoria } from "./../../views/categoria/shared/Categoria";
import { CategoriaService } from '../../views/categoria/shared/categoria.service';
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

  constructor() { }

  ngOnInit() {
  }

  onSalvar() {
    console.log('Salvando...',  this.crudForm);
  }

  onExcluir() {
    console.log('Excluindo...');
  }
}

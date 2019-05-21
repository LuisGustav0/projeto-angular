import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/views/categoria/shared/categoria.model';

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

import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @Input() titulo: string;
  @Input() service: any;

  @ViewChild('crudForm') crudForm: NgForm;

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

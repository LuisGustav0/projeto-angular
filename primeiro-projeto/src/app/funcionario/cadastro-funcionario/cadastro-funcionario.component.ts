import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent {
  idAutoIncrement = 0;
  isExibirAlerta = false;
  nome = '';
  listaFuncionario = [];

  @Output() afterSalvarFuncionario = new EventEmitter();

  getIdAutoIncremento() {
    return ++this.idAutoIncrement;
  }

  onSalvar() {
    this.isExibirAlerta = true;

    const funcionario = {
      id: this.getIdAutoIncremento(),
      nome: this.nome
    };

    this.afterSalvarFuncionario.emit(funcionario);
  }

  onLimpar() {
    this.nome = '';
    this.isExibirAlerta = false;
  }
}

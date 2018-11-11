import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent {
  idAutoIncrement = 0;
  isExibirAlerta = false;
  nome = '';

  listaFuncionario = [];

  getIdAutoIncremento() {
    return ++this.idAutoIncrement;
  }

  onSalvar() {
    this.isExibirAlerta = true;

    this.listaFuncionario.push({
      id: this.getIdAutoIncremento(),
      nome: this.nome
    });
  }

  onLimpar() {
    this.nome = '';
    this.isExibirAlerta = false;
  }
}

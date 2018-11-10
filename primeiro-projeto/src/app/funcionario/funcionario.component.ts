import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent {
  isExibirAlerta = false;
  nome = '';

  onSalvar() {
    this.isExibirAlerta = true;
  }

  onLimpar() {
    this.nome = '';
    this.isExibirAlerta = false;
  }
}

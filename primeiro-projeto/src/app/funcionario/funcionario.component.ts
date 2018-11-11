import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent {
  listaFuncionario = [];

  onAfterSalvar(funcionario) {
    this.listaFuncionario.push(funcionario);
  }
}

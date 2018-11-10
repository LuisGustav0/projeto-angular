import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  nome = '';
  isExibirAlerta = false;

  onSalvar() {
    this.isExibirAlerta = true;
  }

  onLimpar() {
    this.nome = '';
    this.isExibirAlerta = false;
  }
}

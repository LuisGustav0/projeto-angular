import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  nome = 'Luis Gustavo';

  salvar() {
    console.log(`Registro salvo:  ${this.nome}`);

    const numero = Math.round(Math.random() * 100);

    this.nome = 'Luis Gustavo ' + numero;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  nome = 'Luis Gustavo';
  idade = 27;

  getIdade() {
    return 7;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  nome = '';

  onAlterarNome(event: any) {
    this.nome = event.target.value;
  }

  salvar(inputNome: any) {
    this.nome = inputNome.value;
  }
}

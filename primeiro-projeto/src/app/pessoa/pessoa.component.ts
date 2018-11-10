import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  nome = '';

  salvar(inputNome: any) {
    console.log(`Registro salvo:  ${inputNome.value}`);

    this.nome = inputNome.value;
  }
}

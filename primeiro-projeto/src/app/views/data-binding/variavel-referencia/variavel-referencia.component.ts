import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variavel-referencia',
  templateUrl: './variavel-referencia.component.html',
  styleUrls: ['./variavel-referencia.component.scss']
})
export class VariavelReferenciaComponent implements OnInit {
  nome = 'Luis Gustavo';

  constructor() { }

  ngOnInit() {
  }

  onSalvar(nome: string) {
    this.nome = nome;
  }
}

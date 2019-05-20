import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  nome = '';
  isSalvo = false;

  listaColaborador = [];

  constructor() { }

  ngOnInit() {
  }

  getNumeroAleatorio() {
    return Math.round(Math.random() * 99);
  }

  onSalvar() {
    this.isSalvo = true;
    
    let codigoGerado = this.getNumeroAleatorio();
    let colaboradorTO = {
      nome: this.nome,
      caminhoImg: `https://randomuser.me/api/portraits/women/${codigoGerado}.jpg`
    };

    this.listaColaborador.push(colaboradorTO);

    this.onLimpar();
  }

  onLimpar() {
    this.nome = '';
    this.isSalvo = false;
  }
}

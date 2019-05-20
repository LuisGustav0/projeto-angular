import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  nome = 'Luis Gustavo';
  isSalvo = false;

  constructor() { }

  ngOnInit() {
  }

  onSalvar() {
    this.isSalvo = true;

    console.log(`Adicionando: ${this.nome}`);
  }
}

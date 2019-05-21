import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.scss']
})
export class InterpolacaoComponent implements OnInit {

  curso = 'Angular 2+ de ';
  horas = '22 horas';

  constructor() {
  }

  ngOnInit() {
  }

  getCurso() {
    return this.curso;
  }

  getHoras() {
    return this.horas;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  nome = 'Luis Gustavo';

  constructor() { }

  ngOnInit() {
  }

  getNumeroAleatorio() {
    return Math.round(Math.random() * 100);
  }

  onSalvar() {
    this.nome = this.getNumeroAleatorio() + ' - Luis';
    console.log(`Adicionando ${this.nome}`);
  }

  onAlterarNome(event: any) {
    this.nome = event.target.value;
  }
}

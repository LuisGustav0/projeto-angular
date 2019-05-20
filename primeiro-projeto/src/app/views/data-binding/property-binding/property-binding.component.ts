import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
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

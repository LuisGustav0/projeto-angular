import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() valor: number;
  @Input() descricao: string;

  isUserAdmin() {
    return this.valor % 2 === 0;
  }

  getStyleCard() {
    return {
      'border-width.px': this.valor,
      backgroundColor: this.valor % 2 === 0 ? '#E1F5FE' : '#E0F2F1'
    };
  }
}

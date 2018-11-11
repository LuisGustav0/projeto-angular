import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() valor: number;
  @Input() descricao: string;

  getStyleCard() {
    return {
      'border-width.px': this.valor,
      backgroundColor: this.valor % 2 === 0 ? '#E3F2FD' : '#F44336'
    };
  }
}

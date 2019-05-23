import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: any;
  @Input() propriedadeDescricao: string;
  @Input() propriedadeImage: string;

  constructor() { }

  ngOnInit() {
  }
}
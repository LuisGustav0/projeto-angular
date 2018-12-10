import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'in-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() title: string;

  listaCategories = [
    {
      id: 1,
      description: 'Teste descrição 1 '
    },
    {
      id: 1,
      description: 'Descrição 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

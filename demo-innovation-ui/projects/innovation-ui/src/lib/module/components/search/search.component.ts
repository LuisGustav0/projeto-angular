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

  constructor() { }

  ngOnInit() {
  }

}

import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'in-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() provider: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }
}

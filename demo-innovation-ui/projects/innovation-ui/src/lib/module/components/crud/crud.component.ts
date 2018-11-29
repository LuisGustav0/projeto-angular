import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'in-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}

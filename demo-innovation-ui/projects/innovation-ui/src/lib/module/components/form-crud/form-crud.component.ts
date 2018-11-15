import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'in-crud',
  templateUrl: './form-crud.component.html',
  styleUrls: ['./form-crud.component.css']
})
export class FormCrudComponent implements OnInit {
  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}

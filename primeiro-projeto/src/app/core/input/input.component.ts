import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';

import { NgModel } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() hideLabel: boolean;
  @Input() id = `input-${nextUniqueId++}`;
  @Input() disabled = false;
  @Input() required = false;
  @Input() requiredConditional = false;
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() maxlength = 1000;
  @Input() minlength: number;
  @Input() pattern: any;

  @ViewChild('inputField') inputField: NgModel;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.required);
  }
}

import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';

import { NgModel } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
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

import {
  OnInit,
  Component,
  Input,
  ElementRef,
  ViewChild
} from '@angular/core';
import { NgModel } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'in-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() label: string;
  @Input() type: any;
  @Input() hideLabel: boolean;
  @Input() id = `in-input-${nextUniqueId++}`;
  @Input() required = false;
  @Input() requiredConditional = false;
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() maxlength = 1000;
  @Input() minlength: number;
  @Input() pattern: any;

  @ViewChild('inputHtml') inputHtml: ElementRef;

  @ViewChild('inputField') inputField: NgModel;
}

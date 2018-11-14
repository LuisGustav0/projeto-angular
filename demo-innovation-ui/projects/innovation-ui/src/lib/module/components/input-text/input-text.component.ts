import { Component, Input } from '@angular/core';

@Component({
  selector: 'in-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string;
}

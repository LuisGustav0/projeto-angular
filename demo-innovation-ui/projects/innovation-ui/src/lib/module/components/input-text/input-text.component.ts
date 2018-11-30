import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'in-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }
}

import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'in-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @Input() title: string;
  @Input() logo: any;
  @Input() listMenu: [];

  constructor() {}

  ngOnInit() {
  }
}

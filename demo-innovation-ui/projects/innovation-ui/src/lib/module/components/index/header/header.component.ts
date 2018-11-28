import {
  Component,
  Input
} from '@angular/core';
import { NavService } from './../base/nav.service';

@Component({
  selector: 'in-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string;
  @Input() logo: any;

  constructor(public navService: NavService) { }
}

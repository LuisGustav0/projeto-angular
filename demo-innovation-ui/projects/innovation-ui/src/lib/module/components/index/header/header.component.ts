import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'in-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string;
  @Input() logo: any;
}

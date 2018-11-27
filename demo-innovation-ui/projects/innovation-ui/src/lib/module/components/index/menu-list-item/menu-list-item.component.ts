import {
  Component,
  OnInit,
  Input,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'in-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() menu: any;
  @Input() depth: number;

  constructor() {
  }

  ngOnInit() {
  }

  onItemSelected(menu: any) {
  }
}

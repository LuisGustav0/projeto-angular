import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import { NavService } from './base/nav.service';

@Component({
  selector: 'in-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: ElementRef;
  @Input() title: string;
  @Input() logo: any;
  @Input() listMenu: [];

  constructor(private navService: NavService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.navService.sidenav = this.sidenav;
  }
}

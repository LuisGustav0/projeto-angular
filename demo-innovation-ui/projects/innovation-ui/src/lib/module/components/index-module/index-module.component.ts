import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'in-index-module',
  templateUrl: './index-module.component.html',
  styleUrls: ['./index-module.component.scss']
})
export class IndexModuleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}

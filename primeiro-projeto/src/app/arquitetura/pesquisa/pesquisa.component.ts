import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {
  @Input() titulo: string;

  @Input() list: any;
  @Input() cols: any;

  constructor() { }

  ngOnInit() {

  }
}

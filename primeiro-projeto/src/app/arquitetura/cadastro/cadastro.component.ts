import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }
}

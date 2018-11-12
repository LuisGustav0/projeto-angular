import { Component } from '@angular/core';
import { InnovationUiService } from './../../projects/innovation-ui/src/lib/innovation-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-innovation-ui';

  constructor( private innovationUiService: InnovationUiService) {
    this.innovationUiService.getMessage();
  }
}

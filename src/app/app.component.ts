import { Component } from '@angular/core';
import {Auth} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Auth]
})
export class AppComponent {
  constructor(private auth: Auth) {
  }

  title = 'Show Factory';
}

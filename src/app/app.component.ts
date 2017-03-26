import {Component, OnInit} from '@angular/core';
import {Auth} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Auth]
})
export class AppComponent implements OnInit {


  ngOnInit() {

  }

  constructor(private auth: Auth, private router: Router) {
    auth.authenticated()
  }

  title = 'Show Factory';
}

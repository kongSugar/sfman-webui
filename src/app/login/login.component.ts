import {Component, OnInit} from '@angular/core';
import {Auth} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Auth]
})
export class LoginComponent implements OnInit {

  constructor(private auth: Auth) {
  }

  ngOnInit() {
  }

}

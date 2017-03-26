import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  private profile;

  constructor() {
    this.profile = localStorage.getItem('profile');
  }

  ngOnInit() {
  }

}

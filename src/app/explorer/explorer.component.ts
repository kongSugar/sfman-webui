import {Component, OnInit} from '@angular/core';
import {RestService} from "./rest.service";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
  providers: [RestService]
})
export class ExplorerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service'
import {SelectItem} from 'primeng/primeng';
import {Item} from "../models/Item";

@Component({
  selector: 'app-items',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.scss'],
  providers: [RestService]
})

export class ItemsComponent implements OnInit {
  constructor(private restService: RestService) {
  }

  items: Item[];
  errorMessage: string;
  message: string;

  getItems() {
    this.restService.getItems()
      .subscribe(
        items => this.items = items,
        error => this.errorMessage = <any>error);
  }

  onClick() {
    this.getItems();
    this.message = JSON.stringify(this.items);
    console.log("Clicked");
    console.log(this.items);
  }

  ngOnInit() {
    this.getItems();
    this.message = JSON.stringify(this.items);
    console.log(this.items);
  }

}

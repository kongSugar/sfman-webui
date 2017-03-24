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

  displayDialog: boolean;
  selectedItem: Item;
  items: Item[];
  item: Item;
  newItem: boolean;
  errorMessage: string;
  message: string;

  showDialogToAdd() {
    this.newItem = true;
    this.item = new PrimeItem();
    this.displayDialog = true;
  }

  delete() {
  }

  save() {
  }

  onRowSelect(event) {
    this.newItem = false;
    this.item = this.cloneItem(event.data);
    this.displayDialog = true;
  }

  cloneItem(c: Item): Item {
    let item = new PrimeItem();
    for (let prop in c) {
      item[prop] = c[prop];
    }
    return item;
  }

  findSelectedCarIndex(): number {
    return this.items.indexOf(this.selectedItem);
  }

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

class PrimeItem implements Item {
  _id: number;
  name: string;
  department: string;
  description: string;
  gross_price: string;
  height_unit: string;
  manufacturer: string;
  rent: string;
  serialnumber: string;
  weight: string;
  /*constructor(public _id: number,
   public name: string,
   public department: string,
   public description: string,
   public gross_price: string,
   public height_unit: string,
   public manufacturer: string,
   public rent: string,
   public serialnumber: string,
   public weight: string) {
   }*/
}

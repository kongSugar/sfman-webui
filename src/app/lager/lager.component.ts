import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {LagerService} from "./lager.service";
import {User} from "./User";

@Component({
  selector: 'app-lager',
  templateUrl: './lager.component.html',
  styleUrls: ['./lager.component.scss'],
  providers: [LagerService]
})
export class LagerComponent implements OnInit {

  constructor(private lagerService: LagerService) {
  }

  getUsers() {
    this.lagerService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error);
  }

  users: User[];
  text: string;
  name: string;
  errorMessage: string;

  message: string;
  message2: string;

  onClick() {
    this.message = 'Hello ' + this.name;
    this.getUsers();
    this.message2 = JSON.stringify(this.users);
    console.log("HIHI");
    console.log(this.users);
    console.log(this.users[1].name);
  }

  data: any[];
  data2: any[];
  selectedItems: any[];
  cols: any[];
  cities: SelectItem[];

  ngOnInit() {
    this.getUsers();
    console.log("" + this.users);
    console.log("" + this.cities);
    this.data = [];
    this.data2 = [];
    this.selectedItems = [];

    this.cols = [
      {
        field: 'Col1',
        header: 'Col1',
        sortable: true,
        filter: true,
        filterMatchMode: 'contains',
        allowToggle: true,
        style: {'width': '200px', 'vertical-align': 'top'}
      },
      {
        field: 'Col2',
        header: 'Col2',
        sortable: true,
        filter: true,
        filterMatchMode: 'contains',
        allowToggle: true,
        style: {'width': '200px', 'vertical-align': 'top'}
      },
      {
        field: 'Col3',
        header: 'Col3',
        sortable: true,
        filter: true,
        filterMatchMode: 'contains',
        allowToggle: true,
        style: {'width': '200px', 'vertical-align': 'top'}
      },
      {
        field: 'Col4',
        header: 'Col4',
        sortable: true,
        filter: true,
        filterMatchMode: 'contains',
        allowToggle: true,
        style: {'width': '200px', 'vertical-align': 'top'}
      },
      {
        field: 'Col5',
        header: 'Col5',
        sortable: true,
        filter: true,
        filterMatchMode: 'contains',
        allowToggle: true,
        style: {'width': '200px', 'vertical-align': 'top'}
      },
      {
        field: 'Col6',
        header: 'Col6',
        sortable: true,
        filter: true,
        filterMatchMode: 'contains',
        allowToggle: true,
        style: {'width': '200px', 'vertical-align': 'top'}
      },
      {
        field: 'Col7',
        header: 'Col7',
        sortable: true,
        filter: true,
        filterMatchMode: 'contains',
        allowToggle: true,
        style: {'width': '200px', 'vertical-align': 'top'}
      }
    ];


    for (var i = 0; i < 5; i++) {
      let group: number = 0;

      if (i > 24) group = 1;
      this.data.push({
        Col1: 'Value1' + i,
        Col2: 'Value' + group,
        Col3: Math.round((Math.random() * 1000000000) % 1000000),
        Col4: 'Value4',
        Col5: 'Value5',
        Col6: 'Value6',
        Col7: 'Value7'
      });
    }


    this.cities = [];
    this.cities.push({label: 'Select City', value: null});
    this.cities.push({label: 'New York', value: 'New York'});
    this.cities.push({label: 'Rome', value: 'Rome'});
    this.cities.push({label: 'London', value: 'London'});
    this.cities.push({label: 'Istanbul', value: 'Istanbul'});
    this.cities.push({label: 'Paris', value: 'Paris'});
  }
}

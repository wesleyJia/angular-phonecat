import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { Component, OnInit } from '@angular/core';
import { PhoneService, PhoneData } from '../../core/phone/phone.service';

@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: PhoneData[] = [];
  query: string;
  orderProp: string;

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phoneService.query().then(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

  getPhones(): PhoneData[] {
    return this.phones.filter((phone: PhoneData) => {
      if (!this.query) {
        return true;
      }
      const name = phone.name.toLowerCase();
      const snippet = phone.snippet.toLowerCase();
      return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
    })
    .slice(0) // Make a copy
    .sort((a: PhoneData, b: PhoneData): number => {
      if (!this.orderProp) {
        return 0;
      }
      if (a[this.orderProp] < b[this.orderProp]) {
        return -1;
      } else if ([b[this.orderProp] < a[this.orderProp]]) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}

// Define the `phoneList` module
angular.module('phoneList', [
  'ngRoute',
  'core.phone'
]);

angular.module('phoneList')
  .directive(
  'phoneList',
  downgradeComponent({ component: PhoneListComponent }) as angular.IDirectiveFactory
  );

import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { Component } from '@angular/core';
import { PhoneService, PhoneData } from '../../core/phone/phone.service';
import { RouteParams } from '../ng1-upgraded-providers';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;
  constructor(routeParams: RouteParams, phoneService: PhoneService) {
    phoneService.get(routeParams['phoneId']).then(phone => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }
  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

// Define the `phoneDetail` module
angular.module('phoneDetail', [
  'ngRoute',
  'core.phone'
]);

angular.module('phoneDetail')
  .directive(
    'phoneDetail',
    downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
  );
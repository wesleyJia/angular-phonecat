import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService, PhoneData } from '../../core/phone/phone.service';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;
  constructor(activatedRoute: ActivatedRoute, phoneService: PhoneService) {
    phoneService.get(activatedRoute.snapshot.params['phoneId']).then(phone => {
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
'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    template: require('phone-list/phone-list.template.html'),
    controller: ['Phone',
      function PhoneListController(Phone) {
        Phone.query().then(phones => {
          this.phones = phones;
        });
        this.orderProp = 'age';
      }
    ]
  });

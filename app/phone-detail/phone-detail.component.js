'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    template: require('phone-detail/phone-detail.template.html'),
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        
        Phone.get($routeParams.phoneId).then(phone => {
          this.phone = phone;
          this.setImage(phone.images[0]);
        });

        this.setImage = (imageUrl) => {
          this.mainImageUrl = imageUrl;
        };

      }
    ]
  });

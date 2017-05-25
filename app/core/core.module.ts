import * as angular from 'angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckmarkPipe } from './checkmark/checkmark.pipe';
import { PhoneModule } from './phone/phone.module';

@NgModule({
  imports: [
    CommonModule,
    PhoneModule
  ],
  declarations: [
    CheckmarkPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    CheckmarkPipe
  ]
})
export class CoreModule { }

angular.module('core', ['core.phone']);

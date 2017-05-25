import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneDetailComponent } from './phone-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhoneDetailComponent],
  entryComponents: [
    PhoneDetailComponent
  ]
})
export class PhoneDetailModule { }

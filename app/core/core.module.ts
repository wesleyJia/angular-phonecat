import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckmarkPipe } from './checkmark/checkmark.pipe';
import { PhoneModule } from './phone/phone.module';

@NgModule({
  imports: [
    CommonModule,
    PhoneModule
  ],
  declarations: [
    CheckmarkPipe
  ]
})
export class CoreModule { }

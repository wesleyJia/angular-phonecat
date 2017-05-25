import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { PhoneDetailComponent } from './phone-detail.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    PhoneDetailComponent
  ],
  entryComponents: [
    PhoneDetailComponent
  ]
})
export class PhoneDetailModule { }

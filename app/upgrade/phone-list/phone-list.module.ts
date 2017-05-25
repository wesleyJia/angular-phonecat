import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { PhoneListComponent } from './phone-list.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    PhoneListComponent
  ],
    entryComponents: [
    PhoneListComponent
  ]
})
export class PhoneListModule { }

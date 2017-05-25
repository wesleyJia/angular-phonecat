import 'jquery';
import 'bootstrap';

import 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';

import '../app.module';
import '../app.config';
import '../app.animations';
// import '../core/core.module';
// import '../core/phone/phone.module';
// import '../core/phone/phone.service';
// import '../core/checkmark/checkmark.filter';
// import '../phone-detail/phone-detail.module';
// import '../phone-detail/phone-detail.component';
// import '../phone-list/phone-list.module';
// import '../phone-list/phone-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routeParamsProvider } from './ng1-upgraded-providers';
import { CoreModule } from '../core/core.module';
import { PhoneListModule } from './phone-list/phone-list.module';
import { PhoneDetailModule } from './phone-detail/phone-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    CoreModule,
    PhoneListModule,
    PhoneDetailModule,
    AppRoutingModule
  ],
  providers: [
    routeParamsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

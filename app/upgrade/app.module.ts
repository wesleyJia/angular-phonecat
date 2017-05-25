import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    AppRoutingModule,
    CoreModule,
    PhoneListModule,
    PhoneDetailModule
  ],
  providers: [
    routeParamsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

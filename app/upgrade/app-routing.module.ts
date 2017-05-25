import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'phones', pathMatch: 'full' },
    { path: 'phones', component: PhoneListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

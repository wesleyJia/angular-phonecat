import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <div class="view-container">
      <div ng-view class="view-frame"></div>
    </div>  `
})
export class AppComponent implements OnInit {

  constructor(private upgrade: UpgradeModule) {}

  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['phonecatApp']);
  }
}

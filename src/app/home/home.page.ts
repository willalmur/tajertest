import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<ion-header>
      <app-tajer-navbar></app-tajer-navbar>
    </ion-header>

    <ion-content>
      <app-tajer-element-list></app-tajer-element-list>
    </ion-content>`,
  styles: [],
})
export class HomePage {
  constructor() {}
}

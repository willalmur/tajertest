import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../data-access/button';

@Component({
  selector: 'app-tajer-back-button',
  template: `
    <ion-buttons [slot]="slot">
      <ion-back-button
        [color]="buttonColor"
        [icon]="buttonIcon"
        [defaultHref]="defaultHref"
      ></ion-back-button>
    </ion-buttons>
  `,
  styles: [],
})
export class TajerBackButtonComponent implements Button {
  @Input() buttonText: string;
  @Input() buttonTextColor: string;
  @Input() buttonColor: string;
  @Input() buttonIcon: string;
  @Input() defaultHref: string;
  @Input() slot: string;
}

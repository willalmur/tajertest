import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../data-access/card';

@Component({
  selector: 'app-tajer-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ion-card>
    <ion-card-header [color]="headerColor">
      <ion-card-title>{{ cardTitle }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-text [color]="textColor">{{ bodyText }}</ion-text>
    </ion-card-content>
  </ion-card>`,
  styles: [],
})
export class TajerCardComponent implements Card {
  @Input() cardTitle: string;
  @Input() headerColor: string;
  @Input() textColor: string;
  @Input() bodyText: string;
}

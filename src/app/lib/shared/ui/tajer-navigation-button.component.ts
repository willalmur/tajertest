import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
} from '@angular/core';
import { Button } from '../data-access/button';

@Component({
  selector: 'app-tajer-navigation-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ion-button [color]="buttonColor" [routerLink]="buttonUrl">
    <ion-icon [name]="buttonIcon"></ion-icon>
    <ion-label [color]="buttonTextColor">{{ buttonText }}</ion-label>
  </ion-button>`,
  styles: [],
})
export class TajerNavigationButtonComponent implements Button {
  @Input() buttonText: string;
  @Input() buttonTextColor: string;
  @Input() buttonColor: string;
  @Input() buttonIcon: string;
  @Input() buttonUrl: string;
}

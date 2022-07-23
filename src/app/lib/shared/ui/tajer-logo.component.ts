import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Logo } from '../data-access/logo';

@Component({
  selector: 'app-tajer-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ion-title [color]="logoColor">{{ logoText }}</ion-title>`,
  styles: [],
})
export class TajerLogoComponent implements Omit<Logo, 'logoImage'> {
  @Input() logoText: string;
  @Input() logoColor: string;
}

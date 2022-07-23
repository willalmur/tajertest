import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Button } from '../data-access/button';

@Component({
  selector: 'app-tajer-switch-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ion-button
    [color]="buttonColor"
    (click)="buttonClick(buttonText)"
  >
    <ion-icon [name]="buttonIcon"></ion-icon>
    <ion-label [color]="buttonTextColor">{{ buttonText }}</ion-label>
  </ion-button>`,
  styles: [],
})
export class TajerSwitchButtonComponent implements Button<string> {
  @Input() buttonText: string;
  @Input() buttonTextColor: string;
  @Input() buttonColor: string;
  @Input() buttonIcon: string;
  @Input() buttonUrl: string;
  @Output() private buttonClickEvent: EventEmitter<string> =
    new EventEmitter<string>();
  protected buttonClick(buttonText): void {
    this.buttonClickEvent.emit(buttonText);
  }
}

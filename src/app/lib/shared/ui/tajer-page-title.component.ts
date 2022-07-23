import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../data-access/title';

@Component({
  selector: 'app-tajer-page-title',
  template: `
    <ion-title [size]="titleSize" [color]="titleColor">{{
      titleText
    }}</ion-title>
  `,
  styles: [],
})
export class TajerPageTitleComponent implements Title {
  @Input() titleText: string;
  @Input() titleColor: string;
  @Input() titleSize: string;
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TajerElementList } from '../data-access/tajer-element-list';
import { TajerElementListService } from '../data-access/tajer-element-list.service';

@Component({
  selector: 'app-tajer-element-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ion-list>
    <app-tajer-card
      *ngFor="let tajerElement of tajerElementListService.tajerCardList"
      [cardTitle]="tajerElement.cardTitle"
      [bodyText]="tajerElement.bodyText"
      [headerColor]="tajerElement.headerColor"
      [textColor]="tajerElement.textColor"
    ></app-tajer-card>
  </ion-list>`,
  styles: [],
})
export class TajerElementListComponent implements OnInit {
  constructor(public tajerElementListService: TajerElementListService) {}

  ngOnInit() {
    this.tajerElementListService
      .getElement()
      .subscribe((element: TajerElementList) => {
        this.tajerElementListService.tajerCardList = element.tajerCardList;
      });
  }
}

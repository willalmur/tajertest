import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteHandlerService } from '../../shared/util/route-handler.service';
import { TajerHeader } from '../data-access/tajer-header';
import { TajerHeaderService } from '../data-access/tajer-header.service';

@Component({
  selector: 'app-tajer-header',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-item lines="none"
          ><app-tajer-back-button
            [buttonText]="tajerHeaderService.tajerBackButton.buttonText"
            [buttonTextColor]="
              tajerHeaderService.tajerBackButton.buttonTextColor
            "
            [buttonColor]="tajerHeaderService.tajerBackButton.buttonColor"
            [buttonIcon]="tajerHeaderService.tajerBackButton.buttonIcon"
            [defaultHref]="tajerHeaderService.tajerBackButton.defaultHref"
            [slot]="tajerHeaderService.tajerBackButton.slot"
          ></app-tajer-back-button>
          <app-tajer-page-title
            [titleText]="tajerHeaderService.tajerPageTitle.titleText"
            [titleColor]="tajerHeaderService.tajerPageTitle.titleColor"
            [titleSize]="tajerHeaderService.tajerPageTitle.titleSize"
          ></app-tajer-page-title
        ></ion-item>
      </ion-toolbar>
    </ion-header>
  `,
  styles: [],
})
export class TajerHeaderComponent implements OnInit {
  constructor(
    public tajerHeaderService: TajerHeaderService,
    private activatedRoute: ActivatedRoute,
    private routeHandler: RouteHandlerService
  ) {}

  ngOnInit() {
    this.tajerHeaderService
      .getTajerHeader(
        this.routeHandler
          .getTajerPageParamlink(this.activatedRoute)
          .get('info-param'),
        this.routeHandler.getTajerPageParamlink(this.activatedRoute).get('lang')
      )
      .subscribe((tajerHeader: TajerHeader) => {
        this.tajerHeaderService.tajerBackButton = tajerHeader.tajerBackButton;
        this.tajerHeaderService.tajerPageTitle = tajerHeader.tajerPageTitle;
      });
  }
}

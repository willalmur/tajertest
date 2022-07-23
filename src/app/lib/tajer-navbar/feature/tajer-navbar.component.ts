import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { LanguageService } from '../../shared/data-access/language.service';
import { TajerNavbarService } from '../data-access/tajer-navbar.service';

@Component({
  selector: 'app-tajer-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ion-toolbar>
    <ion-item
      lines="none"
      *ngIf="tajerNavbarService.getNavbar() | async as Navbar; else loading"
    >
      <app-tajer-logo
        [logoColor]="tajerNavbarService.tajerLogo.logoColor"
        [logoText]="tajerNavbarService.tajerLogo.logoText"
      ></app-tajer-logo>
      <app-tajer-navigation-button
        *ngFor="
          let tajerNavigationButton of tajerNavbarService.tajerNavigationButtonList
        "
        [buttonColor]="tajerNavigationButton.buttonColor"
        [buttonIcon]="tajerNavigationButton.buttonIcon"
        [buttonText]="tajerNavigationButton.buttonText"
        [buttonTextColor]="tajerNavigationButton.buttonTextColor"
        [buttonUrl]="tajerNavigationButton.buttonUrl"
      ></app-tajer-navigation-button>
      <app-tajer-switch-button
        [buttonColor]="tajerNavbarService.tajerSwitchButton.buttonColor"
        [buttonIcon]="tajerNavbarService.tajerSwitchButton.buttonIcon"
        [buttonText]="tajerNavbarService.tajerSwitchButton.buttonText"
        [buttonTextColor]="tajerNavbarService.tajerSwitchButton.buttonTextColor"
        (buttonClickEvent)="tajerNavbarService.switchButtonClick($event)"
      ></app-tajer-switch-button>
    </ion-item>
    <ng-template #loading>
      <ion-skeleton-text
        style="width: 100%; height: 2rem; margin-left: auto; margin-right: auto;"
        animated="true"
      ></ion-skeleton-text>
    </ng-template>
  </ion-toolbar>`,
  styles: [],
})
export class TajerNavbarComponent implements OnInit, OnDestroy {
  constructor(
    public tajerNavbarService: TajerNavbarService,
    public languageService: LanguageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.languageService.setUserlanguage(
      0,
      this.activatedRoute.snapshot.params.lang
    );
    this.tajerNavbarService.navbar$ = this.tajerNavbarService
      .getNavbar()
      .pipe(map((navbar) => navbar))
      .subscribe((navbar) => {
        this.tajerNavbarService.tajerLogo = navbar.tajerLogo;
        this.tajerNavbarService.tajerNavigationButtonList =
          navbar.tajerNavigationButtonList;
        this.tajerNavbarService.tajerSwitchButton = navbar.tajerSwitchButton;
      });
  }

  ngOnDestroy(): void {
    this.tajerNavbarService.navbar$.unsubscribe();
  }
}

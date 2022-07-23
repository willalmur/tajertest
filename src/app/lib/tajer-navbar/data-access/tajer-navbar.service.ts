import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { LanguageService } from '../../shared/data-access/language.service';
import { TajerLogoComponent } from '../../shared/ui/tajer-logo.component';
import { TajerNavigationButtonComponent } from '../../shared/ui/tajer-navigation-button.component';
import { TajerSwitchButtonComponent } from '../../shared/ui/tajer-switch-button.component';
import { TajerNavbar } from '../data-access/tajer-navbar';

@Injectable({
  providedIn: 'root',
})
export class TajerNavbarService implements TajerNavbar {
  tajerLogo: TajerLogoComponent;
  tajerNavigationButtonList: TajerNavigationButtonComponent[];
  tajerSwitchButton: Partial<TajerSwitchButtonComponent>;

  navbar$: Subscription;

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  switchButtonClick(buttonText): void {
    this.navbar$ = this.languageService
      .getLanguageList()
      .pipe(
        map(
          (languageList: string[]) =>
            languageList.length - 1 - languageList.indexOf(buttonText)
        ),
        tap((index) => console.log(index)),
        switchMap((index) => this.getNavbarByLangId(index))
      )
      .subscribe((navbar) => {
        this.tajerLogo = navbar.tajerLogo;
        this.tajerNavigationButtonList = navbar.tajerNavigationButtonList;
        this.tajerSwitchButton = navbar.tajerSwitchButton;
        console.log(navbar.tajerSwitchButton.buttonText);
        console.log(navbar.tajerSwitchButton.buttonUrl);
        this.router.navigateByUrl(navbar.tajerSwitchButton.buttonUrl);
      });
  }

  getNavbarByLangId(id): Observable<TajerNavbar> {
    return of(
      [
        {
          tajerLogo: {
            logoText: 'Tajer',
            logoColor: 'primary',
          },
          tajerNavigationButtonList: [
            {
              buttonColor: 'light',
              buttonIcon: 'information-circle-outline',
              buttonText: 'About',
              buttonTextColor: 'danger',
              buttonUrl: '/en/about',
            },
          ],
          tajerSwitchButton: {
            buttonText: 'en',
            buttonTextColor: 'light',
            buttonColor: 'primary',
            buttonIcon: 'language-outline',
            buttonUrl: '/en/home',
          },
        },
        {
          tajerLogo: {
            logoText: 'تاجر',
            logoColor: 'primary',
          },
          tajerNavigationButtonList: [
            {
              buttonColor: 'light',
              buttonIcon: 'information-circle-outline',
              buttonText: 'تعريف',
              buttonTextColor: 'danger',
              buttonUrl: '/ar/about',
            },
          ],
          tajerSwitchButton: {
            buttonText: 'ar',
            buttonTextColor: 'light',
            buttonColor: 'primary',
            buttonIcon: 'language-outline',
            buttonUrl: '/ar/home',
          },
        },
      ][id]
    );
  }

  getNavbar(): Observable<TajerNavbar> {
    return this.languageService
      .getUserLanguageId()
      .pipe(switchMap((id) => this.getNavbarByLangId(id)));
  }
}

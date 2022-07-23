import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TajerBackButtonComponent } from '../../shared/ui/tajer-back-button.component';
import { TajerPageTitleComponent } from '../../shared/ui/tajer-page-title.component';
import { TajerHeader } from './tajer-header';

@Injectable({
  providedIn: 'root',
})
export class TajerHeaderService implements TajerHeader {
  tajerBackButton: TajerBackButtonComponent;
  tajerPageTitle: TajerPageTitleComponent;

  constructor() {}

  getTajerHeader(paramlink, lang): Observable<TajerHeader> {
    return of({
      tajerBackButton: {
        buttonText: '',
        buttonTextColor: '',
        buttonColor: 'black',
        buttonIcon: 'arrow-back-circle-outline',
        defaultHref: '/en/home',
        slot: 'start',
      },
      tajerPageTitle: {
        titleText: 'About',
        titleColor: 'dark',
        titleSize: 'small',
      },
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { LanguageService } from '../../shared/data-access/language.service';
import { TajerCardComponent } from '../../shared/ui/tajer-card.component';
import { TajerElementList } from './tajer-element-list';

@Injectable({
  providedIn: 'root',
})
export class TajerElementListService implements TajerElementList {
  tajerCardList: TajerCardComponent[];

  constructor(private languageService: LanguageService) {}

  getElementByLangId(id): Observable<TajerElementList> {
    return of(
      [
        {
          tajerCardList: [
            {
              cardTitle: 'Tajer Card',
              headerColor: 'danger',
              textColor: 'dark',
              bodyText: 'This is a tajer card',
            },
          ],
        },
        {
          tajerCardList: [
            {
              cardTitle: 'بطاقة تاجر',
              headerColor: 'danger',
              textColor: 'dark',
              bodyText: 'هذه بطاقة تاجر',
            },
          ],
        },
      ][id]
    );
  }

  getElement(): Observable<TajerElementList> {
    return this.languageService
      .getUserLanguageId()
      .pipe(switchMap((id) => this.getElementByLangId(id)));
  }
}

import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of, take, tap } from 'rxjs';
import { Language } from './language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService implements Language {
  language = 'en';

  constructor() {}

  getLanguageList(): Observable<string[]> {
    return of(['en', 'ar']);
  }

  getLanguagebyId(id: number): Observable<string> {
    return of(['en', 'ar'][id]);
  }

  getUserLanguage(sessionId): Observable<string> {
    return of(this.language);
  }

  getUserLanguageId(): Observable<number> {
    return combineLatest([
      this.getLanguageList(),
      this.getUserLanguage(0),
    ]).pipe(
      map(([languageList$, userLanguage$]) =>
        languageList$.indexOf(userLanguage$)
      )
    );
  }

  setUserlanguage(sessionId, userLanguage: string): void {
    this.language = userLanguage;
  }
}

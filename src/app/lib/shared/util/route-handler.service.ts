import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteHandlerService {
  getTajerPageParamlink(activatedRoute: ActivatedRoute) {
    return activatedRoute.snapshot.paramMap;
  }
}

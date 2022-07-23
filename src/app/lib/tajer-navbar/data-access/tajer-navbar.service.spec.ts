import { TestBed } from '@angular/core/testing';

import { TajerNavbarService } from './tajer-navbar.service';

describe('TajerNavbarService', () => {
  let service: TajerNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TajerNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

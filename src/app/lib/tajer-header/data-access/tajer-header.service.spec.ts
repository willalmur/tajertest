import { TestBed } from '@angular/core/testing';

import { TajerHeaderService } from './tajer-header.service';

describe('TajerHeaderService', () => {
  let service: TajerHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TajerHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

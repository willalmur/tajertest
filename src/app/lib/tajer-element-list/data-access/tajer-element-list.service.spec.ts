import { TestBed } from '@angular/core/testing';

import { TajerElementListService } from './tajer-element-list.service';

describe('TajerElementListService', () => {
  let service: TajerElementListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TajerElementListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

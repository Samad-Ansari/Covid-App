import { TestBed } from '@angular/core/testing';

import { TabsDataService } from './date-card.service';

describe('DateCardService', () => {
  let service: TabsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { PhonebooksService } from './phonebooks.service';

describe('PhonebooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhonebooksService]
    });
  });

  it('should be created', inject([PhonebooksService], (service: PhonebooksService) => {
    expect(service).toBeTruthy();
  }));
});

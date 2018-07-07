import { TestBed, inject } from '@angular/core/testing';

import { ContactFormsService } from './contact-forms.service';

describe('ContactFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactFormsService]
    });
  });

  it('should be created', inject([ContactFormsService], (service: ContactFormsService) => {
    expect(service).toBeTruthy();
  }));
});

import { Injectable } from '@angular/core';
import { Phonebook } from '../models/phonebook';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonebooksService {
  phonebooks: Phonebook[] = [
    {
      firstName: null,
      lastName: null,
      phoneNumber: null,
      email: null,
    }

  ];
  constructor() { }
  
  getPhonebooks = (): Observable<Phonebook[]> => {
    return of(this.phonebooks);
  }
}
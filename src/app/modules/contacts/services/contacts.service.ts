import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../../../shared/models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    {
      firstName: 'Jim',
      lastName: 'Halpert',
      phoneNumber: '(756)123-5493',
      email: 'jhalpert@dundermifflin.com'
    },
    {
      firstName: 'Michael',
      lastName: 'Scott',
      phoneNumber: '(756)947-3492',
      email: 'mscott@dundermifflin.com'
    },
    {
      firstName: 'Pam',
      lastName: 'Beasley',
      phoneNumber: '(756)587-4345',
      email: 'pbeasley@dundermifflin.com'
    },
    {
      firstName: 'Dwight',
      lastName: 'Schrute',
      phoneNumber: '(756)594-2494',
      email: "schrutefarms@scrantonbiz.org"
    }
  ];

    getContacts = (): Observable<Contact[]> => {
     return of(this.contacts);  
    };
}

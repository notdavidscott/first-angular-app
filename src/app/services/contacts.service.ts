import { Injectable } from '@angular/core';

import { Contact } from '../models/contact';
import { url } from 'inspector';

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
      lastName: 'Biesley',
      phoneNumber: '(756)587-4345',
      email: 'pbiesley@dundermifflin.com'
    },
    {
      firstName: 'Dwight',
      lastName: 'Schrute',
      phoneNumber: '(756)594-2494',
      email: "schrutefarms@scrantonbiz.org"
    }
  ]
  constructor() { }
}

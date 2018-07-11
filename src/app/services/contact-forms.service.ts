import { Injectable } from '@angular/core';
import { ContactForm } from '../shared/models/contact-form';

@Injectable({
  providedIn: 'root'
})
export class ContactFormsService {
  contactforms: ContactForm[] = [
    {
    name: null,
    email: null,
    subject: null,
    message: null
    }
  ];
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
//import { ContactForm } from '../models/contact-form';
//import { ContactFormsService } from '../services/contact-forms.service';
import { Message } from '../../shared/models/message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  model: Message = new Message();

  constructor() {}

  ngOnInit() {
    //this.contactforms = this.dataService.contactforms;
  }
  onSubmit(){
    console.log('Form Submission Successful: ', this.model);
  }

}

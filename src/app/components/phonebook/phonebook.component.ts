import { Component, OnInit } from '@angular/core';
import { Phonebook } from '../../shared/models/phonebook';
import { PhonebooksService } from '../../services/phonebooks.service';


@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  model: Phonebook = new Phonebook;
  phonebooks: Phonebook[];
  dataService: PhonebooksService;
  
  constructor(private phonebooksService: PhonebooksService ) {
    this.dataService = this.phonebooksService;
   }

  ngOnInit(): void {
      this.dataService.getPhonebooks().subscribe(phonebooks => this.phonebooks = phonebooks)
  }
  onSubmit() {
    console.log('Contact Addition Successful: ', this.model);
  }
}

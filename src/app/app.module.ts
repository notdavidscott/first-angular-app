import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { SkillsModule } from 
import { SkillsService } from './modules/skills/services/skills.service';

import { ContactsService } from './modules/contacts/services/contacts.service';

import { GreetingComponent } from './components/greeting/greeting.component';
import { GreetingsService } from './services/greetings.service';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactFormsService } from './services/contact-forms.service';

import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { PhonebooksService } from './services/phonebooks.service';

import { ContactsModule } from './modules/contacts/contacts.module';
import { SkillsModule } from './modules/skills/skills.module';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';

import { MoviesModule } from './modules/movies/movies.module';
import { MusicModule } from './modules/music/music.module';



@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactFormComponent,
    PhonebookComponent, 
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    SkillsModule,
    ContactsModule,
    MoviesModule,
    MusicModule,
    AppRoutingModule,
   
  ],
  providers: [SkillsService, ContactsService, GreetingsService, ContactFormsService, PhonebooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
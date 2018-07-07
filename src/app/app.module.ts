import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './services/contacts.service';

import { GreetingComponent } from './greeting/greeting.component';
import { GreetingsService } from './services/greetings.service';

import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent,
    GreetingComponent,
    ContactFormComponent, 
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [SkillsService, ContactsService, GreetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

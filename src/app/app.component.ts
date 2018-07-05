import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'David Scott Perez';
  title = 'Fullstack Javascript Dev'
  city = "Ladera Ranch";
  tagLine = '"Do it" - Emporer Palpatine';
  tagLine2 = '"Doin\'\ it!" - Josh Peck';
  aboutMe = "Born and raised in Orange County, CA. Javascript Full Stack Web Deveveloper, Front-End Designer, User-Interface Creator, Family Man, Coffee Lover, Worship Leader @ Vineyard Laguna Niguel. I started my coding journey in 2017: half a year before enrolling in Bethel Tech, the first faith-based coding school! I have since aquired a variety of skills and have refined my ability to write functional and sleek code! Thank you for stopping by my portfolio page."
  photo1 = 'url(http://notdavidscott.com/images/coffee2.0.jpg)';
}


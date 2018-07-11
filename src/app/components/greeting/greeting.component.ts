import { Component, OnInit } from '@angular/core';
import { Greeting } from '../../shared/models/greeting';
import { GreetingsService } from '../../services/greetings.service';


@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
    greetings: Greeting[];
    dataService: GreetingsService;

    constructor(private greetingsService: GreetingsService) {
      this.dataService = this.greetingsService;
    }

  ngOnInit() {
    this.greetings = this.dataService.greetings;
  }

}

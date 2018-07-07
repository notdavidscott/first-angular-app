import { Injectable } from '@angular/core';
import { Greeting } from '../models/greeting';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {
  greetings: Greeting [] = [
    {
      visitor: null
    }

  ]
  constructor() { }
}

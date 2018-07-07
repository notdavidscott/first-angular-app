import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
    id: 0,
    name: 'HTML/CSS',
    level: Level.Advanced
    }, 
    {
    id: 1,
    name: 'Node.js',
    level: Level.Beginner
    },
    {
    id: 2, 
    name: 'Database Management',
    level: Level.Intermediate
    },
    {
    id: 3, 
    name: 'Sounding like the Edge from U2 on guitar',
    level: Level.Expert
    }
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  }
}

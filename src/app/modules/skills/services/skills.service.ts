import { Injectable } from '@angular/core';

import { Skill } from '../../../shared/models/skill';
import { Level } from '../../../shared/types/level.enum';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skill: Skill;
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
  getSkill = (id: number): Observable<Skill> => {
    this.skill = this.skills.find(skill => skill.id === id);
    //console.log('Id: ' + id + ', Result is: ', this.skills);
    return of(this.skills.find(skill => skill.id === id));
  }
}

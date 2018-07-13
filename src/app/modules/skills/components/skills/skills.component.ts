import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../shared/models/skill';
import { Level } from '../../../../shared/types/level.enum';
import { Observable, of } from 'rxjs';
import { SkillsService } from '../../services/skills.service';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService: SkillsService;
  constructor(
    private skillsService: SkillsService,
    private route: ActivatedRoute
  ) { 
  
   this.dataService = this.skillsService;
  }

  ngOnInit() {
   // this.skills = this.dataService.skills; //not used when usings getSkills()
   this.dataService.getSkills().subscribe(skills => this.skills = skills);
  }

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  }

}

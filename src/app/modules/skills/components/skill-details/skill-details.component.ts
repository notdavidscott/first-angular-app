import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SkillsService } from '../../../skills/services/skills.service';
import { Skill } from '../../../../shared/models/skill';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
   skill: Skill;
  constructor(
    private route: ActivatedRoute,
    private skillService: SkillsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getSkill();
  }

  getSkill() {
    const id = +this.route.snapshot.paramMap.get('id');
   // console.log('id: ' +  id);
    this.skillService.getSkill(id).subscribe(skill => (this.skill = skill));
  }


  goBack() {
    this.location.back();
  }

}


  


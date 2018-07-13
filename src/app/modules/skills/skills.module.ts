import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillDetailsComponent } from './components/skill-details/skill-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SkillsComponent,
    SkillDetailsComponent
  ],
  exports: [
    SkillsComponent
  ],
})
export class SkillsModule { }

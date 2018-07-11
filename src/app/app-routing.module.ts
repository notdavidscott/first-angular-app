import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { DisplayMoviesComponent } from './modules/movies/display-movies/display-movies.component';

const routes: Routes = [
  {
      path: 'contact',
      component: ContactFormComponent
  },
  {
      path: 'skills',
      component: SkillsComponent
  },
  {
      path: 'greeting',
      component: GreetingComponent
  },
  {
      path: '', 
      redirectTo: '/greeting',
      pathMatch: 'full'
  }, 
  {
      path: 'movies',
      component: DisplayMoviesComponent
  }
]

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  
  declarations: [],
  
})
export class AppRoutingModule { }

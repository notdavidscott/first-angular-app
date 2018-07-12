import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DisplayMusicComponent } from '../music/display-music/display-music.component';
import { DisplayMoviesComponent } from '../movies/display-movies/display-movies.component';


@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [
    DisplayMusicComponent
  ],
  exports: [
    DisplayMusicComponent
  ]
})
export class MusicModule { }

import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../../../../shared/models/movie';
import { EventEmitter} from '@angular/core'; //watch for this

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie: Movie; //not an array since single movie selection 
  @Output() movieDeleted: EventEmitter<number>= new EventEmitter();
  @Output() movieViewed: EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickDelete() {
    alert("Deleted movie" + ' "' + this.movie.title + '" from Movies.');
    this.movieDeleted.emit(this.movie.id);
  }

  onClickView() {
    //alert('Movie Poster');
    this.movieViewed.emit(this.movie.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { IMovie } from './movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  isDisabled: boolean = true;
  childmassage:string=''
  private _searchFilter: string = '';
  movies: IMovie[] = []    
  filteredMoviesbySearch: IMovie[] = [ ];

  constructor(private serviceofMovies:MoviesService) { 
  }

  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value;
    this.filteredMoviesbySearch = this.filterMovie(value);
  }

  ngOnInit(): void {
     console.log('inside ng on init'); 
     this.serviceofMovies.getMovies().subscribe({next:(moviesData)=>{
      console.log(moviesData.results);
      this.movies=moviesData.results;
      this.filteredMoviesbySearch=moviesData.results;
      
     }})
    //  this.movies=this.serviceofMovies.movies
    //  this.filteredMoviesbySearch=this.movies;
     
  }

  toggleDtails(moveId: number): void {
    this.movies.forEach(function (element) {
      if (element.id == moveId) {
        element.showDetail = !element.showDetail;
      }
    });
  }

  filterMovie(val: string) {
    return this.movies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
  }

  moviesratedCliked(message:string){
    console.log(message);
    this.childmassage=message;
    
  }
}

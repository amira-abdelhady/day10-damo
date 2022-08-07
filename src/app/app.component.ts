import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

//Decorator-->Prefix with an @
//custom decorator
//Built-in decorator
//Metadata
@Component({
  //Directive
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<div style="background-color:blue;"><h1>hello</h1></div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Movies App';
  subTitle:string='This is clone for Egybest website'
  favorite:boolean=true; 
}

//moviesList  moviesListComponent

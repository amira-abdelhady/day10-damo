import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService { 

  url='https://api.themoviedb.org/3/movie/popular?api_key=2d75551abc1251658731e13fb6a090c4'
   
  constructor(private http:HttpClient) { }

  getMovies():Observable<any>{
    //observable
   return this.http.get<any>(this.url);
  }

  getMovieById(movieId:string):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2d75551abc1251658731e13fb6a090c4`)
  }

  getProducts():Observable<any>{
  return this.http.get('http://localhost:3000/getProducts')
  }
}

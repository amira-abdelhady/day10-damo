import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
   movie:any={}
  constructor(private route:ActivatedRoute,private moviesDetailService:MoviesService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
     this.moviesDetailService.getMovieById(id!).subscribe({next:(data)=>{
      console.log(data);
      
       this.movie=data
     }})

  }

}

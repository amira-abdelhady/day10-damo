import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges{
  @Input()rating: number=0;
   clipWidth:number=75;

  @Output() ratingpointed:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.clipWidth=this.rating*75/5
  }

  onClick():void{
    this.ratingpointed.emit(`the move with rating ${this.rating} was cliked`)
  }
}

import { Component, OnInit , Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  @Output() change = new EventEmitter();
  isFavorite= false;
  constructor() {
  }
  ngOnInit(): void {
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}
//Have it the same name as the event we want to change

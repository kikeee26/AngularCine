import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export default class RatingComponent implements OnInit {
  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  ratingAnterior;

  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  maximoRatingArr = [];
  votado = false;

  constructor() {}
  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index:number): void {
    this.ratingSeleccionado = index + 1;
  }
  manejarMouseLeave() {
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else {
      this.ratingSeleccionado = 0;
    }
  }

  rate(index: number): void{
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;

    //Para enviar el evento
    this.rated.emit(this.ratingSeleccionado);
  }
}

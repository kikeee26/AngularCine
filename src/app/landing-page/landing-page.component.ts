import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  ngOnInit(): void {

    setTimeout(() => {
    this.peliculasEnCines = 
    [{
      titulo: 'Spiderman',
      fechaLanzamiento: new Date(),
      precio: 6.5, 
      poster: 'https://www.ecartelera.com/carteles/4500/4578/001_m.jpg'
    },
    {
      titulo: 'Moana',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 5.99,
      poster: 'https://images.cdn3.buscalibre.com/fit-in/360x360/d9/ae/d9ae073169ab32c4cc744f5427c52ebd.jpg'
    },
    {
      titulo: 'Spiderman 2',
      fechaLanzamiento: new Date(),
      precio: 6.5,
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gPWFHudfgaQ5LL02Va5tPhtwy9Hq8AMo-Q&usqp=CAU'
    },
    {
      titulo: 'Origen',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 5.99, 
      poster: 'https://m.media-amazon.com/images/I/71J9BzTif3L._SL1122_.jpg'
    },
    {
      titulo: 'Spiderman 3',
      fechaLanzamiento: new Date(),
      precio: 6.5,
      poster: 'https://m.media-amazon.com/images/I/51tQzS5jp1L._SY445_.jpg'
    }
  ]  
    
  }, 200);

  setTimeout(() => {
     this.peliculasProximosEstrenos = [
      /*
      {
      titulo: 'Avatar: El sentido del agua',
        fechaLanzamiento: new Date('2022-12-06'),
        precio: 9
      },
      {
        titulo: 'El señor de los anillos: El retorno del rey',
        fechaLanzamiento: new Date('2002-07-14'),
        precio: 4.3
      },
      {
        titulo: 'Star Wars: El Ascenso de Skywalker',
        fechaLanzamiento: new Date('2019-10-30'),
        precio: 7.8
      }
      */
    ]  
  }, 200);
}

  title = 'Firulais';
  ocultar = false;
  peliculasEnCines;
  peliculasProximosEstrenos;
  
  manejarRated(voto: number): void {
    alert(voto);
  }
}

import { Component } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  peliculasEnCines: PeliculaDTO[];
  peliculasProximosEstrenos: PeliculaDTO[];

  cargarDatos(){
    this.peliculasService.obtenerLandingPage().subscribe(landingPage => {
      this.peliculasEnCines = landingPage.enCines;
      this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
    })
  }

  borrado(){
    this.cargarDatos();
  }
  
}

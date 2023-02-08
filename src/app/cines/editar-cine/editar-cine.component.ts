import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  constructor() {}

  modelo: cineDTO = {nombre: "Cinemas el punt", latitud: 41.491682050797145, lontitud: 2.1479237079620366};


  guardarCambios(cine: cineCreacionDTO)
  {
    console.log(cine);
  }
}

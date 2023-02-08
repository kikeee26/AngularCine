import { Component } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {
  modelo: PeliculaDTO = {titulo: 'Spider-Man', 'trailer':'abc', enCines: true, resumen: 'cosa',
    fechaLanzamiento: new Date(), Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1sLo_0ST5HVl0YnIiWWF4RRs2p29nfPilg&usqp=CAU'}
}

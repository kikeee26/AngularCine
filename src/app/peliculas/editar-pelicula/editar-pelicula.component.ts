import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  modelo: PeliculaDTO = {titulo: 'Spider-Man', 'trailer':'abc', enCines: true, resumen: 'cosa',fechaLanzamiento: new Date(), poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1sLo_0ST5HVl0YnIiWWF4RRs2p29nfPilg&usqp=CAU'}

  ngOnInit(): void {
  }
  guardarCambios(pelicula: PeliculaCreacionDTO)
  {
    console.log(pelicula);
  }
}

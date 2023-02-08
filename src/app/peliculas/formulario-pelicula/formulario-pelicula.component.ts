import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {
[x: string]: any;
  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  @Input()
  modelo: PeliculaDTO

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: ''
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }

  }


  changeMarkDown(texto){
    this.form.get('resumen').setValue(texto);
  }

  archivoSeleccionado(arcivo: File){
    this.form.get('poster').setValue(arcivo);
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorPeliculaDTO } from 'src/app/actores/actor';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
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
  

  @Input()
  generosNoSeleccionados: MultipleSelectorModel[];

  generosSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  errores: string[] = [];

  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[];

  cinesSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];

  
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
      poster: '',
      generosIds: '', 
      cinesIds: '',
      actores: ''
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }


  changeMarkDown(texto){
    this.form.get('resumen').setValue(texto);
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
  }

  guardarCambios(){
    console.log(this.generosSeleccionados);

    const generosId = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosIds').setValue(generosId);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesIds').setValue(cinesIds);

    const actores = this.actoresSeleccionados.map(val =>{
      return {id: val.id, personaje:val.personaje}
    })
    this.form.get('actores').setValue(actores);

    this.OnSubmit.emit(this.form.value);
  }
}

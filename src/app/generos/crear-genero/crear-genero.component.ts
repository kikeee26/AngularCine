import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit{

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required]
      }]
    });
  }
  guardarCambios() {
    //--Guardar los cambios
    this.router.navigate(['/generos']);
  }
  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo.hasError('required'))
    {
      return 'El campo es requerido';
    }
    return '';
  }
}

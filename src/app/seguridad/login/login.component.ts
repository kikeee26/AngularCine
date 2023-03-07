import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
    private seguridadService: SeguridadService) {}

  errores: string[] = [];

  login(credenciales: credencialesUsuario){
    this.seguridadService.login(credenciales)
      .subscribe(respuesta => {
        this.seguridadService.guardarToken(respuesta);
        this.router.navigate(['/']);        
      }, errores => this.errores = parsearErroresAPI(errores))
  }
}

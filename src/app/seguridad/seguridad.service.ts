import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { credencialesUsuario, respuestaAutenticacion, usuarioDTO } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = environment.apiURL + 'cuentas'
  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'token-expiracion';
  private readonly campoRol = 'role';

  obtenerUsuarios(pagina: number, recordsPorPagina: number): Observable<any>{
    let params = new HttpParams();
    params.append('pagina', pagina.toString());
    params.append('recordsPorPagina', recordsPorPagina);
    return this.httpClient.get<usuarioDTO>(`${this.apiUrl}/listadousuarios`,
    {observe: 'response', params})
  }

  hacerAdmin(usuarioId: string) {
    const headers = new  HttpHeaders('Content-Type: application/json');
    return this.httpClient.post(`${this.apiUrl}/hacerAdmin`, JSON.stringify(usuarioId), {headers});
  }

  removerAdmin(usuarioId: string) {
    const headers = new  HttpHeaders('Content-Type: application/json');
    return this.httpClient.post(`${this.apiUrl}/removerAdmin`, JSON.stringify(usuarioId), {headers});
  }

  estaLogueado(): boolean {
    const token = localStorage.getItem(this.llaveToken);

    if(!token){
      return false;
    }

    const expiracion = localStorage.getItem(this.llaveExpiracion);
    const expiracionFecha = new Date(expiracion);

    if(expiracionFecha <= new Date()){
      this.logout();
      return false;
    }


    return true;
  }

  logout(){
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }

  obtenerRol(): string {
    return this.obtenerCampoJWT(this.campoRol);
  }

  obtenerCampoJWT(campo: string): string {
    const token = localStorage.getItem(this.llaveToken);
    if(!token){return '';}
    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo];
  }

  registrar(credenciales: credencialesUsuario): Observable<respuestaAutenticacion> {
    return this.httpClient.post<respuestaAutenticacion>(this.apiUrl + '/crear', credenciales)
  }

  login(credenciales: credencialesUsuario): Observable<respuestaAutenticacion> {
    return this.httpClient.post<respuestaAutenticacion>(this.apiUrl + '/login', credenciales)
  }

  guardarToken(respuestaAutenticacion: respuestaAutenticacion){
    localStorage.setItem(this.llaveToken, respuestaAutenticacion.token);
    localStorage.setItem(this.llaveExpiracion, respuestaAutenticacion.expiracion.toString());
  }

  obtenerToken(){
    return localStorage.getItem(this.llaveToken);
  }
}

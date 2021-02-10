import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelUsuario } from '../models/model_usuario';
import { tap } from 'rxjs/operators';
import { Transaccion } from '../models/model_transaccion';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private host = 'http://localhost:4000';
  
  // private host = 'https://node4g-test.herokuapp.com';
  private url = this.host + '/api/v1';
  public usuario: ModelUsuario;
  
  constructor(  private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  login(email:String, password: String){
    let data = {
      email,
      password
    }
    return this.http.post<Transaccion>(`${this.url}/login`, data, 
    { withCredentials: true })
    .pipe(
      tap((resp: Transaccion )=> {
        if (resp.result ){
          this.guardarLocalStorage(resp.data['token']);

          this.usuario = new ModelUsuario(
            resp.data['usuarioId'],
            resp.data['nombre'],
            resp.data['role']
          );
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
        }
      })
    );
  }
  guardarLocalStorage(token: string) {
    localStorage.setItem('token', token);

    let hoy = new Date();
    hoy.setSeconds(1800);
    localStorage.setItem('expira', hoy.getTime().toString());

  }

}

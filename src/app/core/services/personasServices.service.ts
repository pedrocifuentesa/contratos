import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelUsuario } from '../models/model_usuario';
import { tap } from 'rxjs/operators';
import { Transaccion } from '../models/model_transaccion';
import { ModelPersonas } from '../models/model_personas';

@Injectable({
  providedIn: 'root'
})
export class PersonasServicesService {
  private host = 'http://localhost:8080';
  
  // private host = 'https://node4g-test.herokuapp.com';
  private url = this.host + '/api/v1';
  public personas: ModelPersonas;
constructor(private http: HttpClient) { }


getall(){
  return this.http.get<Transaccion>(`${this.url}/personas/`)
  .pipe(

  );
}


find(data : any){
  return this.http.post(`${this.url}/personas/find`,data);
}
create(data:any){
  return this.http.post<Transaccion>(`${this.url}/personas/save`,data);
  
}
update(data:any){
  return this.http.get<Transaccion>(`${this.url}/personas/update`,data);
  
}
}

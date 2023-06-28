import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Precio } from '../models/precio';

@Injectable({
  providedIn: 'root'
})
export class PrecioService {
  url = 'http://localhost:4000/api/precios/';

  constructor(private http: HttpClient) { 

  }

  getPrecios(): Observable<any> {
    return this.http.get(this.url);
  }

  deletePrecio(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPrecio(precio: Precio): Observable<any> {
    return this.http.post(this.url, precio);
  }

  viewPrecio(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarPrecio(id: string, precio: Precio): Observable<any> {
    return this.http.put(this.url + id, precio);
  }

}

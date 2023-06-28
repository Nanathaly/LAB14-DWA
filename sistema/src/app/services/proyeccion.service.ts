import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyeccion } from '../models/proyeccion';

@Injectable({
  providedIn: 'root'
})
export class ProyeccionService {
  url = 'http://localhost:4000/api/proyecciones/';

  constructor(private http: HttpClient) { 

  }

  getProyeccions(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProyeccion(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProyeccion(proyeccion: Proyeccion): Observable<any> {
    return this.http.post(this.url, proyeccion);
  }

  viewProyeccion(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarProyeccion(id: string, proyeccion: Proyeccion): Observable<any> {
    return this.http.put(this.url + id, proyeccion);
  }

  generarPDF(): Observable<Blob> {
    const options = { responseType: 'blob' as 'json' };
    return this.http.get<Blob>(this.url + 'generar-pdf', options);
  }

}

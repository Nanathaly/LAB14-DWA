import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Protagonista } from '../models/protagonista';

@Injectable({
  providedIn: 'root'
})
export class CineService {
  url = 'http://localhost:4000/api/protagonistas/';

  constructor(private http: HttpClient) { 

  }

  getProtagonistas(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProtagonista(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProtagonista(protagonista: Protagonista): Observable<any> {
    return this.http.post(this.url, protagonista);
  }

  viewProtagonista(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarProtagonista(id: string, protagonista: Protagonista): Observable<any> {
    return this.http.put(this.url + id, protagonista);
  }

}

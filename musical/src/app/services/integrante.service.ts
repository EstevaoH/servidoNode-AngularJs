import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Integrantes } from '../models/integrante';

@Injectable({
  providedIn: 'root'
})
export class IntegranteService {

  private url = 'http://localhost:3000/integrantes'

  constructor(private http: HttpClient) { }

  integrante_get():Observable<Integrantes[]>{
    return this.http.get<Integrantes[]>(this.url)
  }


}

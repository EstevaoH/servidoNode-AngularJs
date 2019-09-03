import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Integrantes } from '../models/integrante';
import { Banda } from '../models/banda';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private url = 'http://localhost:3000/integrantes/';
  private url2 = 'http://localhost:3000/bandas/'
  constructor(private http: HttpClient) { }

  buscarintegrante_get(NoIntegrante: string):Observable<any>{
    return this.http.get<any>(this.url + NoIntegrante)
  }

  buscarbanda_get(NoBanda: string):Observable<any>{
    return this.http.get<any>(this.url2  + NoBanda)
  }
}

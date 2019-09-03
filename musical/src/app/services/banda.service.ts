import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banda } from '../models/banda';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private url = 'http://localhost:3000/bandas'
  
  constructor(private  http: HttpClient) { }

  bandas_get():Observable<Banda[]>{
    return this.http.get<Banda[]>(this.url)
  }
}

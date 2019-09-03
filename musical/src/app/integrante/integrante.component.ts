import { Component, OnInit } from '@angular/core';
import { Integrantes } from '../models/integrante';
import { IntegranteService } from '../services/integrante.service';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {

  integrantes: Integrantes[];

  constructor(private integrante: IntegranteService) {
    this.integrantes = [];
   }

  ngOnInit() {
    this.integrante.integrante_get().subscribe(
      res =>{
        this.integrantes = res
        console.log(res)
      }
    )
  }

}

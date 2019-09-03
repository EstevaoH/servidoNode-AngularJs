import { Component, OnInit } from '@angular/core';
import { Integrantes } from '../models/integrante';
import { BuscaService } from '../services/busca.service';

@Component({
  selector: 'app-buscar-integrante',
  templateUrl: './buscar-integrante.component.html',
  styleUrls: ['./buscar-integrante.component.css']
})
export class BuscarIntegranteComponent implements OnInit {

  NoIntegrante: string
  integrantes: Integrantes[];
  constructor(private integrante: BuscaService) {
    this.integrantes = [];
   }

  ngOnInit() {
  }

  integranteBuscar(){
    this.integrante.buscarintegrante_get(this.NoIntegrante).subscribe(
      res =>{
        this.integrantes = res;
        console.log(res)
      }
    )
  }

}

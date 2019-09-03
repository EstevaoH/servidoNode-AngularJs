import { Component, OnInit } from '@angular/core';
import { Banda } from '../models/banda';
import { BandaService } from '../services/banda.service';
import { BuscaService } from '../services/busca.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  
  NoBanda: string
  banda: Banda[];
  constructor(private bandas: BuscaService) {
    this.banda = [];
   }

  ngOnInit() {
  }

  bandaBuscar(){
    this.bandas.buscarbanda_get(this.NoBanda).subscribe(
      res =>{
        this.banda = res;
        console.log(res)
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Banda } from '../models/banda';
import { BandaService } from '../services/banda.service';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  banda: Banda[];
  constructor(private bandas: BandaService) {
    this.banda = [];
   }

  ngOnInit() {
    this.bandas.bandas_get().subscribe(
      res =>{
        this.banda = res;
        console.log(res)
      }
    )
  }

}

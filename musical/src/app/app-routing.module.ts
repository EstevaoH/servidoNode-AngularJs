import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandaComponent } from './banda/banda.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BuscarIntegranteComponent } from './buscar-integrante/buscar-integrante.component';


const routes: Routes = [
  {path: 'bandas', component:BandaComponent},
  {path: 'integrantes', component: IntegranteComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'buscarintegrantes', component: BuscarIntegranteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

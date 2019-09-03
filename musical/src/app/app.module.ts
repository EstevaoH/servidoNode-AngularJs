import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandaComponent } from './banda/banda.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
  import { from } from 'rxjs';
import { BuscarComponent } from './buscar/buscar.component';
import { BuscarIntegranteComponent } from './buscar-integrante/buscar-integrante.component';

@NgModule({
  declarations: [
    AppComponent,
    BandaComponent,
    IntegranteComponent,
    BuscarComponent,
    BuscarIntegranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

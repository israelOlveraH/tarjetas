import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HistorialComponent } from './historial/historial.component';
import { ReporteComponent } from './reporte/reporte.component';
import { DiarioComponent } from './diario/diario.component';
import { BarraComponent } from './barra/barra.component';
import { RegistroComponent } from './registro/registro.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    DetalleComponent,
    HistorialComponent,
    ReporteComponent,
    DiarioComponent,
    BarraComponent,
    RegistroComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

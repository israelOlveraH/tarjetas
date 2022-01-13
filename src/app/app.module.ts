import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HistorialComponent } from './historial/historial.component';
import { ReporteComponent } from './reporte/reporte.component';
import { DiarioComponent } from './diario/diario.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    DetalleComponent,
    HistorialComponent,
    ReporteComponent,
    DiarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

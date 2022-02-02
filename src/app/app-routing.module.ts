import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TarjetasComponent} from "./tarjetas/tarjetas.component";
import {DetalleComponent} from "./detalle/detalle.component";
import {HistorialComponent} from "./historial/historial.component";
import {ReporteComponent} from "./reporte/reporte.component";
import {DiarioComponent} from "./diario/diario.component";
import {RegistroComponent} from "./registro/registro.component";

const routes: Routes = [
  { path:"tarjetas", component:TarjetasComponent },
  { path:"detalle",component:DetalleComponent },
  { path:"historial", component:HistorialComponent},
  { path:"diario", component:DiarioComponent },
  { path:"reporte", component:ReporteComponent},
  { path:"registro", component:RegistroComponent},
  { path: '', redirectTo: 'tarjetas', pathMatch: 'full' },
  { path: '**', redirectTo: 'tarjetas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

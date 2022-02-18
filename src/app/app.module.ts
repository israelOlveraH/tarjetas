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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";


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
        MatIconModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

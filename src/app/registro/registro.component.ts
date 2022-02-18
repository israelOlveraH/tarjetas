import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Declaracion de variables
  public formulario: FormGroup;

  constructor(private firestore: AngularFirestore) {
    // Inicializacion de variables (Asignarles un valor inicial)
    this.formulario = new FormGroup({
      nombre: new FormControl(""),
      apat: new FormControl(""),
      amat: new FormControl(""),
      dir: new FormControl(""),
      ref: new FormControl(""),
      art: new FormControl(""),
      pre: new FormControl(""),
      cli: new FormControl(""),
    });
  }

  // Metodos
  ngOnInit(): void {
  }

  public registroFormulario(): void {
    console.log(this.formulario.value)
    this.firestore.collection("registroTarjetas").add(this.formulario.value)
  }

}

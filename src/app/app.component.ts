import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarjetas';

   constructor(private firestore: AngularFirestore) {
     this.firestore.collection('example').add({ nombre: 'hola', }).then().catch();
     this.firestore.collection('example').doc()
   }

}

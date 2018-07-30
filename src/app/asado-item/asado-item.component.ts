import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asado-item',
  templateUrl: './asado-item.component.html',
  styleUrls: ['./asado-item.component.scss']
})
export class AsadoItemComponent implements OnInit {
  //private _store: AngularFirestore;
  //private router: Router;

  @Input() asado;
  @Output() gotoAsado = new EventEmitter();
  constructor(private _store: AngularFirestore, private router: Router ) { }


  ngOnInit() {
  }

  click = () => this.gotoAsado.emit(this.asado);

  borrar(asadoId) {
    this._store.collection('asados').doc(asadoId).delete();

    this.router.navigateByUrl('/dashboard');


    /*  this._store.collection('asados').doc(this.asado.id).set(this.asado)//.update(this.asado)
      db.collection("cities").doc("DC").delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  */
  }
}

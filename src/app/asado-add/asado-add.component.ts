import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
export interface Asado {
  name: string;
  price: number;
  guests?: any[];
  recipes?: any[];
}
@Component({
  selector: 'app-asado-add',
  templateUrl: './asado-add.component.html',
  styleUrls: ['./asado-add.component.scss']
})
export class AsadoAddComponent implements OnInit {
  asado: Asado = { name: '', price: null };
  constructor(private _store: AngularFirestore) { }

  ngOnInit() {
  }
  addAsado = (form: NgForm) => {
    this._store.collection('asados').add(this.asado)
      .then(() => form.reset())
      .catch(err => console.error(err));
  }
}



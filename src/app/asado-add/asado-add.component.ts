import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export interface Asado {
  name: string;
  price: number;
  guests?: any[];
  recipes?: any[];
  id?: string
  token?: string,
  description?: string,
  place?: ''
}
@Component({
  selector: 'app-asado-add',
  templateUrl: './asado-add.component.html',
  styleUrls: ['./asado-add.component.scss']
})
export class AsadoAddComponent implements OnInit {
  asado: Asado = { name: '', price: null };
  constructor(
    private _store: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
  }
  editAsado = (form: NgForm) => {
    console.log("Adding asado:");
    console.log(this.asado);
    if (!this.asado.id) {
      this.asado.id = this._store.createId();
    }

    this._store.collection('asados').add(this.asado)
      .then(() => form.reset())
      .catch(err => console.error(err));
    this.router.navigateByUrl('/dashboard');
  }
  goBack = () => this.router.navigateByUrl('/dashboard');


}



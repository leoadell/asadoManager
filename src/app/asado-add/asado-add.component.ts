import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';

export interface Asado {
  name: string,
  description?: string,
  price: number,
  place?: '',
  id?: string
}
@Component({
  selector: 'app-asado-add',
  templateUrl: './asado-add.component.html',
  styleUrls: ['./asado-add.component.scss']
})
export class AsadoAddComponent implements OnInit {
  asadoTitle: string = "Crear nuevo asado";
  asadoSubtitle: string = "Ingrese datos del asado";
  add_edit: string = "Crear";
  asado: any = { name: '', price: null };

  constructor(
    private _store: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      if (!isUndefined(data.id)) {
        this.asadoTitle = "Editar Asado Existente";
        this.asadoSubtitle = "Modifique los datos necesarios";
        this.add_edit = "Guardar";
        console.log("entro a editar, entonces el asado.id es:" + data.id);
        this._store.collection('asados', ref => ref.where('id', '==', data.id))
          .valueChanges()
          .subscribe(asados => {
            this.asado = asados[0];
          });
      }
    });
  }

  editAsado = (form: NgForm) => {
    console.log("Adding asado:");
    console.log("Aca va a poner el json del asado:" + this.asado);

    if (!this.asado.id) {
      console.log("entra por aca entonces asado.id es undefined:" + this.asado.id)
      this.asado.id = this._store.createId();
    }

    this._store.collection('asados').doc(this.asado.id).set(this.asado)//.update(this.asado)
      //this._store.collection('asados').add(this.asado)
      .then(() => form.reset())
      .catch(err => console.error(err));
    this.router.navigateByUrl('/dashboard');
  }
  goBack = () => this.router.navigateByUrl('/dashboard');
}



import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  asado: any = { name: '', price: null };
  
  constructor(
    private _store: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    {
      this.route.params.subscribe(data => {
        this._store.collection('asados', ref => ref.where('id', '==', data.id))
          .valueChanges()
          .subscribe(asados => {
            this.asado = asados[0];
          });
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

  }
}

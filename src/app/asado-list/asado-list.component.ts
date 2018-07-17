import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-asado-list',
  templateUrl: './asado-list.component.html',
  styleUrls: ['./asado-list.component.scss']
})

export class AsadoListComponent implements OnInit {

  editar = new EventEmitter<any>();
 borrar = new EventEmitter<any>();
  asados = [];
  @Input('listaAsados') listaAsados = [{
    name: 'Asado 8vos',
    code: 'ksahdkashjdkasl',
    price: 200,
    place: 'maps.google.lacasadelahermanadelperro'
  },
  {
    name: 'Asado porque si',
    code: 'asfdlñalksjdlñkjassdalñk',
    price: 250,
    place: 'maps.google.lacasadelahermanadeldruppi'
  },
  {
    name: 'Otro asado',
    code: 'op3298j4vm08',
    price: 300,
    place: 'maps.google.lacasadelaotrahermanadelperro'
  }]

  constructor(private _store: AngularFirestore) { }

  ngOnInit() {
    this._store.collection('asados')
      .valueChanges()
      .subscribe(asados => this.asados = asados);
  }

  edit(asado) {
    this.editar.emit(asado);

  }

  delete(asado) {
    this.borrar.emit(asado);
  }

}

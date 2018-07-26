import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asado-list',
  templateUrl: './asado-list.component.html',
  styleUrls: ['./asado-list.component.scss']
})

export class AsadoListComponent implements OnInit {
  asados = [ ];
  asadoDetail = null;

  constructor(private _store: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this._store.collection('asados')
      .valueChanges()
      .subscribe(asados => this.asados = asados);
  }

  showDetail = (asado) => {
    console.log(asado);
    this.router.navigateByUrl('/asado/detail/' +asado.id); 
    
  }

  btnAddClick = () => this.router.navigateByUrl('/asado/add');
}

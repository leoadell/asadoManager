import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { routerNgProbeToken } from '../../../node_modules/@angular/router/src/router_module';

@Component({
  selector: 'app-asado-detail',
  templateUrl: './asado-detail.component.html',
  styleUrls: ['./asado-detail.component.scss']
})
export class AsadoDetailComponent implements OnInit {
  @Input() asado: any = {
    name: "",
    price: 0,
    description: "",
    place: "",
    id:""
  };

  constructor(
    private _store: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {this.route.params.subscribe(data => {
    this._store.collection('asados', ref => ref.where('id', '==', data.id))
      .valueChanges()
      .subscribe(asados => {
        this.asado = asados[0];
      });
  }); 
}

goBack = () => this.router.navigateByUrl('/dashboard');
}

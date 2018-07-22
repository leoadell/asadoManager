import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-asado-item',
  templateUrl: './asado-item.component.html',
  styleUrls: ['./asado-item.component.scss']
})
export class AsadoItemComponent implements OnInit {
  @Input() asado;
  @Output() gotoAsado = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  click = () => this.gotoAsado.emit(this.asado);
}
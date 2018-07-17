import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-asado-item',
  templateUrl: './asado-item.component.html',
  styleUrls: ['./asado-item.component.scss']
})
export class AsadoItemComponent implements OnInit {

  @Output() editar ;
  @Output() borrar ;
  asados = [];
  constructor() { }

  ngOnInit() {
  }

}

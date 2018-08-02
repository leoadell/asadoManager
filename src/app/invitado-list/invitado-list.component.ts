import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitado-list',
  templateUrl: './invitado-list.component.html',
  styleUrls: ['./invitado-list.component.scss']
})
export class InvitadoListComponent implements OnInit {
invitados=[{nombre:"Grippi"},{nombre:"Chelo"},{nombre:"Yermi"},{nombre:"Tekla"},{nombre:"Papu"}];

  constructor() { }

  ngOnInit() {
  }

}

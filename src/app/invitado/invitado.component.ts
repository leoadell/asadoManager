import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.scss']
})
export class InvitadoComponent implements OnInit {
@Input() invitado;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { MatToolbar, MatButtonModule, MatCheckboxModule } from '@angular/material';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: string = "";
  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router
  ) { }

  ngOnInit() {
    this.email = this._fireAuth.auth.currentUser.email;
  }
  logout = () => {
    this._fireAuth.auth.signOut()
      .then(() => {
        this._router.navigate(['/login']);
      });
  }

}

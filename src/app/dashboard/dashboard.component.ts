import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  email: string;
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

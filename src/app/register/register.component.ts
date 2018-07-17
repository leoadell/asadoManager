import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { formArrayNameProvider } from '../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  user = { email: '', name: '', password: '', id: null };
  error: string;

  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router,
    private _store: AngularFirestore
  ) { }

  ngOnInit() {
  }

  register = (form: NgForm) => {
    this._fireAuth.auth
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then(() => {
        form.reset();
        this._store.collection('users')
          .doc('${id}').set(this.user)
          .then(() => {
            alert('user Registered!');
            this._router.navigate(['/login']);
          });
      });
  }

}

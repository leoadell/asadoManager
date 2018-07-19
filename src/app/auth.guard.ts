import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private _auth: AuthenticationService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._auth.isAuthenticated()) {
      this._router.navigate(['/login']);
    }
    return true;
  }
}

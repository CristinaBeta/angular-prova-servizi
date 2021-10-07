import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {    //servizio per Route guard
  
  constructor(public auth: AuthService, public router: Router) {

  }

  canActivate(): boolean {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['dopoLogin']);
        return false;
      }
      return true;
    }
  }

  //Il canActivat e un metodo che restituisce un boolean e indica se consentire o meno la navigazione verso una rotta.
  //Se l'utente non è autenticato, viene reindirizzato a qualche altro posto, in questo caso un percorso chiamato /dopologin.
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {      //servizio per Route guard (canActivate)

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    //const token= localStorage.getItem('token');
    const token= sessionStorage.getItem('token');
    // Controlla se il token è scaduto e restituisce true o false
    return token != null/*&& !this.jwtHelper.isTokenExpired(token)*/;
  }
}

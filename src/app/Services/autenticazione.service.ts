import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Autenticazione } from '../interfacce/Autenticazione';

export const ACCESS_TOKEN = 'demo-access-store';

@Injectable({
  providedIn: 'root'
})
export class AutenticazioneService {    //servizio di autenticazione utilizzato dal componente LoginAutenticazione

  private a?: Autenticazione;

  constructor() {
    const stored = localStorage.getItem(ACCESS_TOKEN);
    if (stored) {
      this.a = JSON.parse(stored) as Autenticazione;
    }
  }

  getAuthentication(): Autenticazione | undefined {
    return this.a;
  }

  login(username: string, password:string): Observable<void> {
    const loginDate = new Date();
    const expirationDate = new Date(loginDate.getTime() + (60 * 60000));  // 1 ora
    this.a = { username, password, loginDate, expirationDate };
    return of(localStorage.setItem(ACCESS_TOKEN, JSON.stringify(this.a)));
  }

  logout(): Observable<void> {
    this.a = undefined;
    return of(localStorage.removeItem(ACCESS_TOKEN));
  }
}
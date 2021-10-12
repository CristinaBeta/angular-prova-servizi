import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { AutenticazioneService } from '../Services/autenticazione.service';

@Component({
  selector: 'app-login-autenticazione',
  templateUrl: './login-autenticazione.component.html',
  styleUrls: ['./login-autenticazione.component.css']
})
export class LoginAutenticazioneComponent implements OnInit {

  username?: string;
  password?: string;

  constructor(
    private readonly authenticationService: AutenticazioneService, private readonly snackBar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Login');
    this.logout();
  }

  login(): void {
    if (this.username=='utente' && this.password =='utente') {
      this.authenticationService.login(this.username, this.password)
        .subscribe(
          () => {
            this.snackBar.open(`Benvenuto ${this.username}`);
            //this.router.navigate(['/']);
          },
          err => this.snackBar.open(`Accesso non riuscito: ${err}`)
        );
    } else {
      this.snackBar.open('Username o password non corretti');
    }
  }

  logout(): void {
    this.authenticationService.logout()
      .subscribe(() => this.snackBar.open('Logout effettuato'));
  }

}
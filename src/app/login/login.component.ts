import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../model/persona.model';
import { GetService } from '../Services/get.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameC = new FormControl('', [Validators.required]);
  passwordC: string | undefined;
  listaPersone: Persona[] = [];
  contatore: number = 0;

  constructor(private storageService: StorageService, private getService: GetService, private route:Router) { }

  ngOnInit(): void {
    this.getService.ottieniDatiDaSts()
    .subscribe(result => {
      this.listaPersone=result;
    });
  }

  login() {
    this.listaPersone.forEach(p => {
      if(this.usernameC.value == p.user && this.passwordC == p.password){
      this.storageService.setVarSessione('token', this.usernameC.value);
      console.log("variabile settata");
      }
      else {
        this.contatore++;
      }
    });
    if(this.contatore == this.listaPersone.length){       //sono assolutamente certa che si poteva fare meglio di così, ma al momento non mi viene in mente altro e funziona, quindi lascio così
      alert("Username o password errati");
      this.contatore = 0;
      this.route.navigate(['/login']);
    }
  }

  errore():string{
    if (this.usernameC.hasError('required')) {      //ho importato MatFormFieldModule ed ho iniziato a trasformarlo in un formControl con gli errori, ma è da finire
      return 'You must enter a value';
    }
    return "";
  }
}

/*email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }*/


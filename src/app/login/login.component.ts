import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "prova";
  password: string = "prova";
  usernameC: string | undefined;
  passwordC: string | undefined;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  login(){
    /*richiesta post su (server{
    request =
    this.username = user;
    this.password =password;
    }).subscrive(res=>{localStorage.setItem...})
    */
    if(this.username === this.usernameC && this.password == this.passwordC){
    this.storageService.setVarSessione('token', this.username+this.password);
    console.log("variabile settata");

    }
    else{
      console.log("no");
    }
  }
}


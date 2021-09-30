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

  login() {
    /*login(user, pass) {
    this.http.post("https://localhost:8091/login", {     //richiesta post su server che controlla nel db..ho iniziato a farlo nel controller persona, ma visto che lo scopo era capire il canActivate ho creato un user e pass di prova da usare qui 
      request: "login",
      username: user,
      password: pass
    }).subscribe(res => {
      if (res[0] == "KO") {
        alert(res[1]);
      } else {
        localStorage.setItem("name", res[1]);
        this.router.navigate(['/page/Nothing00/ciao-mondo']);
      }
    });
  }
    */
    if (this.username === this.usernameC && this.password == this.passwordC) {
      this.storageService.setVarSessione('token', this.username + this.password);
      console.log("variabile settata");

    }
    else {
      console.log("no");
    }
  }
}


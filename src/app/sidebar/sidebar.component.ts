import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //chiamata con subscrive nel servizio //this.getService.primaProva3();
    this.listaPersone();
    this.getById(1);
  }

  listaPersone() {
    this.loading = true;                                //prima di far partire la chiamata setto loading su true e quando ho ottenuto i dati lo faccio tornare su false
    this.http.get<any>('http://localhost:8091/').subscribe(res => {
      console.log(res);
      this.loading = false;
    })
  }

  getById(id: number) {
    this.loading = true;
    this.http.get<any>('http://localhost:8091/utente/' + id).subscribe(res => {
      console.log(res);
      this.loading = false;
    })
  }

  inserisciUtente(id: number, nome: string, eta: number, informazioni: string, user: string, password: string) {
    this.loading = true;
    this.http.post('http://localhost:8091/inserisciUtente/', {
      /*'id': id,
      'nome': nome,
      'eta': eta,
      'informazioni': informazioni,
      'user':user,
      'password':password*/
      id: id,
      nome: nome,
      eta: eta,
      informazioni: informazioni,
      user: user,
      password: password
    }).subscribe(res => {
      console.log(res);
      this.loading = false;
    })
  }

}

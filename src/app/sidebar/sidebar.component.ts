import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Utente } from '../model/utente.model';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

      loading: boolean = false;
      id: number = 13;
      nome: string = "tredici"
      eta: number = 22;
      informazioni: string = "tredici";
      user: string = "tredici";
      password: string = "tredici";
      //altre prove con postService
      persone:Utente[] = [];
      person = new Utente();

  constructor(private http: HttpClient, private postService:PostService) { }

  ngOnInit(): void {
    //chiamata con subscrive nel servizio //this.getService.primaProva3();
    this.listaPersone();
    this.getById(1);
    //altre prove con postService
    this.refreshPeople();
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
    this.http.post('http://localhost:8091/', {
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

  inserisciUtente2() {
    this.loading = true;
    this.http.post('http://localhost:8091/', {
      id: this.id,
      nome: this.nome,
      eta: this.eta,
      informazioni: this.informazioni,
      user: this.user,
      password: this.password
    }).subscribe(res => {
      console.log(res);
      this.loading = false;
    })
  }

  //altre prove con servizio post
  refreshPeople() {
    this.postService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.persone=data;
      })      
 
  }
 
  addPerson() {
    this.postService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }

}

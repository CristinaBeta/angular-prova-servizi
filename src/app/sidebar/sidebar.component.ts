import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.model';
import { Utente } from '../model/utente.model';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

      loading: boolean = false;
      persone:Utente[] = [];
      person = new Utente();
      personeDaSts: Persona[] = [];
      persona = new Persona();

  constructor(private http: HttpClient, private postService:PostService) { }

  ngOnInit(): void {
    this.refreshPeople();
    this.refreshPersone();
  }

  refreshPeople() {
    this.loading = true;                                //prima di far partire la chiamata setto loading su true e quando ho ottenuto i dati lo faccio tornare su false
    this.postService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.persone=data;
        this.loading = false;
      })      
 
  }
 
  addPerson() {
    this.postService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }

  refreshPersone() {
    this.loading = true;                                //prima di far partire la chiamata setto loading su true e quando ho ottenuto i dati lo faccio tornare su false
    this.postService.getPersone()
      .subscribe(data => {
        console.log(data)
        this.personeDaSts=data;
        this.loading = false;
      })      
 
  }
 
  aggiungiPersona() {
    this.postService.addPersona(this.persona)
      .subscribe(data => {
        console.log(data)
        this.refreshPersone();
      })      
  }

}

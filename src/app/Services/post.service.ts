import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { Utente } from '../model/utente.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {    //si chiama postService, ma ci sono http.get e http.delete

  baseURL: string = "http://localhost:4000/";
  urlDaSts: string = "http://localhost:8091/";
  stato: string = "";
 
  constructor(private http: HttpClient) {
  }
  
  getPeople(): Observable<Utente[]> {
    console.log('getPeople '+this.baseURL + 'persone')
    return this.http.get<Utente[]>(this.baseURL + 'persone')
  }
 
  addPerson(person:Utente): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'persone', body,{'headers':headers})
  }

  getPersone(): Observable<Persona[]> {
    console.log('getPersone '+this.urlDaSts)
    return this.http.get<Persona[]>(this.urlDaSts)
  }
 
  addPersona(p:Persona): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(p);
    console.log(body)
    return this.http.post(this.urlDaSts, body,{'headers':headers})
  }

  deletePersona(p:Persona){
    return this.http.delete(this.urlDaSts + 'elimina/' + p.id)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../model/utente.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL: string = "http://localhost:4000/";
 
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
}

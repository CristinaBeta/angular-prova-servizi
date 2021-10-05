import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL: string = "http://localhost:4000/";
 
  constructor(private http: HttpClient) {
  }
 
  getPeople(): Observable<Persona[]> {
    console.log('getPeople '+this.baseURL + 'persone')
    return this.http.get<Persona[]>(this.baseURL + 'persone')
  }
 
  addPerson(person:Persona): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'persone', body,{'headers':headers})
  }
}

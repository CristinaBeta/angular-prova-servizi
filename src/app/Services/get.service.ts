import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utenti } from '../interfacce/Utenti';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  url: string = 'http://localhost:4000/persone';  //da cartella server aprire terminale integrato e npx json-server -p 4000 --watch persone.json
  url2: string = 'http://localhost:8091/';      //da Spring tool suite far partire progetto SpringBoot praticaAngular
  persone: Utenti[] = [];

  constructor(private http: HttpClient) {
  }

  ottieniDati() {
    return this.http.get<any>(this.url);
  }

  /*ottieniDati(){
  return this.http.get<any>(this.url)
  .subscribe(result => {
    this.persone=result;
  });
}

  getPersone(){
  return this.persone;
}*/

  ottieniDatiDaSts(){
    return this.http.get<any>(this.url2);
  }
}


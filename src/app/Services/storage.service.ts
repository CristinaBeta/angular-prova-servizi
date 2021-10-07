import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {     //servizio per salvare variabili di sessione


  constructor() { }

  setVarSessione(key:string, valore:string){
    sessionStorage.setItem(key, valore);
  }

  getVarSessione(key:string):string | null{
    return sessionStorage.getItem(key);
  }

}


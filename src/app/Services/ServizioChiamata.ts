/*Un servizio è solitamente rappresentato da una classe indipendente dalla View che viene definita per svolgere un compito ben preciso */
//Delego al servizio esterno la chiamata:

import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})        //Per ogni dipendenza che si vuole usare nell'applicazione dovremo registrare un provider con un Injector, in modo che quest'ultimo possa poi utilizzare il provider per creare nuova istanza di quella dipendenza.Se metto provideIn:root non serve
export class ServizioChiamata{

    constructor(private http: HttpClient){   //private http è DI?   
    }

    getAll():Observable<any>{
        return this.http.get<any>('http://localhost:3000/dimensione');   
    }
}


//grazie al meccanismo di Dependency Injection, Angular si occupa di creare e iniettare un'istanza all'interno del componente
//Per ogni Injector esiste sempre una sola istanza di un determinato servizio.
//Un Injector si occupa di creare le dipendenze e si serve di un Provider che è un oggetto il quale indica all'Injector come ottenere o creare un'istanza di una dipendenza.
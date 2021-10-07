import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Utenti } from '../interfacce/Utenti';

@Injectable({
  providedIn: 'root'
})
export class GetService implements OnInit{        //servizio per http.get

  url: string = 'http://localhost:4000/persone';  //da cartella server aprire terminale integrato e npx json-server -p 4000 --watch persone.json
  url2: string = 'http://localhost:8091/';      //da Spring tool suite far partire progetto SpringBoot praticaAngular
  url3: string = 'http://localhost:5000/dropdown'; //da cartella server aprire terminale integrato e npx json-server -p 5000 --watch dropDown.json
  persone: Utenti[] = [];
  loading: boolean = false;                       //mi serve per sapere se i dati li sta caricando oppure no, di dafault metto false

  constructor(private http: HttpClient) {
  }

  /*
  RIEPILOGO
  -apro la pagina web
  -avvio il mio componente, quindi viene chiamato ngOnInit che chiama il mio metodo primaProva()
  -primaProva() fa la richiesta http e ritorna come risultato un Observable
  -l'observable è in attesa della risposta http
  -sottoscrivo una funzione chiamata callback, che è una arrow function,
  -dopodichè solo nel momento in cui l'observable riceve la risposta allora richiama la callback che io gli ho sottoscritto
  -la callback penderà nel res(nell'oggetto res) la risposta cioè i dati arrivati dall'http e li stamperà nella console
  -in questo modo portiamo i dati dal server al nostro client
  */

  ngOnInit(): void {                        //quando si avvia il componente chiamiamo l'observable, parte la chiamata al server e poi con il dato che ritorna usiamo il metoto subscribe per sottoscrivere all'observable la mia callback
    this.primaProva().subscribe(this.callback);
  }

  primaProva(): Observable<Object> {                          
    return this.http.get<any>(this.url);    //Un Observable è una tipologia di oggetto che fa la chiamata e attende la risposta, avvia un'azione in maniera asincrona e attende
  }

  /*La callback è, in genere, una funzione, o un "blocco di codice" che viene passata come parametro ad un'altra funzione. 
  In particolare, quando ci si riferisce alla callback richiamata da una funzione, 
  la callback viene passata come argomento ad un parametro della funzione chiamante. 
  In questo modo la chiamante può realizzare un compito specifico (quello svolto dalla callback) che non è, molto spesso, noto al momento della scrittura del codice.*/
  callback = (res: any) => {                //nome = (oggetto che è la risposta) arrow function => {codice che andrà a fare questa funzione}
  console.log(res);                         //arrow function https://www.mrw.it/javascript/arrow-function-funzioni-freccia_12693.html
  }

  
  //nella pratica si può fare più semplicemente così:
  primaProva2(){                          
    this.http.get<any>(this.url).subscribe(res => {
      console.log(res);
    })
  }

  //per grosse moli di dati, per far sapere all'utente se questi dati stanno arrivando oppure no gli mettiamo uno spinner o quancosa che gli dice "sto caricando"
  primaProva3(){         
    this.loading = true;                                //prima di far partire la chiamata setto loading su true e quando ho ottenuto i dati lo faccio tornare su false
    this.http.get<any>(this.url).subscribe(res => {
      console.log(res);
      this.loading = false;
    })
  }

  //la sottoscrizione è nei componenti che utilizzano il servizio di chiamata
  ottieniDati() {                          
    return this.http.get<any>(this.url);    
  }

  ottieniDatiDaSts(){
    return this.http.get<any>(this.url2);
  }

  ottieniDatiPerDropDown(){
    return this.http.get<any>(this.url3);
  }

}


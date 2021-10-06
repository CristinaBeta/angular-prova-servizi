import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Grandezza } from '../interfacce/Grandezza';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {
  @Input() items!: Grandezza[];
  @Output() evento: EventEmitter<Grandezza> = new EventEmitter();
  active!: Grandezza;
  ngOnInit(): void {
  }

  itemClickHandler(i: Grandezza) {
    this.evento.emit(i);
    this.active = i;
  }

}

/*
Se vogliamo far comunicare il componete figlio con il componete padre dobbiamo fare uso degli eventi in modo da risalire verso l’alto.
Per permettere al componente figlio di emettere un evento verso il componente padre dobbiamo:
Importare la classe EventEmitter
Definire un evento personalizzato che il componente figlio emetterà utilizzando l’elemento $events della direttiva @Component
Creare una variabile con il decoratore @Output() di tipo EventEmitter nel componente figlio in modo da emettere eventi quando richiesto
Chiamare il metodo emit per emettere l’evento
Modificare il componente padre in modo da associare un attributo 
Angular emetterà un evento dal componete figlio al componente padre che invocherà l’istruzione alla destra dell’attributo, in questo caso, la funzione updateDimensione*/

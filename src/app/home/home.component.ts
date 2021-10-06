import { Component, OnInit } from '@angular/core';
import { Grandezza } from '../interfacce/Grandezza';
import { ModalService } from '../Services/modal.service';
import { ServizioChiamata } from '../Services/ServizioChiamata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  current: Grandezza | undefined;                           //Dopo aver fatto funzionare la chiamata ed il parse, posso fare un'ulteriore passaggio e spostare il subscrive nel servizio. A quel punto dovrò spostare anche le variabili, poi sia qui sia in app.c.html richiamare current tramite servizioChiamata.current (idem per dimensione) 

  dimensione: Grandezza[] = [];/*= [                   //qui lascio la dichiarazione e sposto i dati nel json, poi uso la chiamata sull'url per recuperare il json, lo riconverto in oggetti e li metto in questo array
    { nome: "piccola", dimensione: "200" },
    { nome: "media", dimensione: "500" },
    { nome: "grande", dimensione: "800" }
  ];

  constructor() {
    this.current = this.dimensione[0];
  }*/

  constructor(private servizioChiamata: ServizioChiamata, private modalService: ModalService) {  
    setTimeout(() => {
      this.modalService.open();
    }, 10000);
  }

  ngOnInit(): void {
    this.servizioChiamata.getAll()
    .subscribe(result => {
      this.dimensione=result;
      this.current = this.dimensione[0];
      console.log("log");
    });
  }

  /*Observable
	Una sorta di stream di informazioni che contiene dati sincroni e asincroni. Possiamo sottoscrivere questo stream (tramite il metodo subscribe) e ricevere passivamente i dati non appena sono emessi.
		myObservable.subscribe(value => console.log(value))*/

  updateDimensione(i: Grandezza) {
    this.current = i;
  }
  
}

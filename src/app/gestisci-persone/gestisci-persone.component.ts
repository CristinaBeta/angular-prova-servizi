import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utenti } from '../interfacce/Utenti';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-gestisci-persone',
  templateUrl: './gestisci-persone.component.html',
  styleUrls: ['./gestisci-persone.component.css']
})
export class GestisciPersoneComponent implements OnInit {
  listaPersone: Utenti[] = [];
  personeId: number=0;

  constructor(private getService: GetService, private route:Router, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.getService.ottieniDati()
    .subscribe(result => {
      this.listaPersone=result;
    });
    this.activatedRoute.params.subscribe(utenti => {
      this.personeId = utenti['id'];
    });
  }

  prova(id:number){
    this.route.navigate(['dettaglio', id]);
  }

  dettaglioInterno(id:number){
    this.route.navigate(['dettaglioInterno', id]);
  }

  listaDaSts(){
    this.avviso();
    this.getService.ottieniDatiDaSts()
    .subscribe(result => {
      this.listaPersone=result;
    });
    this.activatedRoute.params.subscribe(utenti => {
      this.personeId = utenti['id'];
    });
  }

  avviso(){
    alert("Si stanno provando a richiamare i dati dal db, assicurarsi che il progetto praticaAngular sia partito"); //potevo metterlo direttamente in listaDaSt()
  }
}

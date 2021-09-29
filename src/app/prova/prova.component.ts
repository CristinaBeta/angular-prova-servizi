import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {
  var1 = 'Ciao';
  var2 = ' a tutti';
  nome: string;
  stampa: string | undefined;
  testo2:string | undefined;
  soprannome!:string;

  constructor(private storageService: StorageService) {
    this.nome = 'Ciao';
    setTimeout(() => {
      this.nome = 'Cristina';
    }, 2000);
  }

  ngOnInit(): void {
  }

  getClick(event: any) {
    console.log(event);
  }

  getText(event: any) {
    console.log(event.target.value);
    this.stampa = event.target.value;
  }

  getData(input: any) {
   console.log(input.value);
  }

  sostituisciNome(){
    this.nome = 'Pippo';
  }

  salvaVarInSessione() {
    this.storageService.setVarSessione('pulsante', this.nome);
  }
}

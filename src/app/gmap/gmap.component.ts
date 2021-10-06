import { Component, Input, OnInit } from '@angular/core';
import { Grandezza } from '../interfacce/Grandezza';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css'],
})
export class GmapComponent implements OnInit {
  @Input() dimensione!: string;                 //variabile del componet figlio a cui si devono “iniettare” i dati che provengono dal componet esterno
                                                //dobbiamo dire esplicitamente ad Angular che i dati provengono dall’esterno utilizzando il decoratore @Input
                                                
  constructor() { }

  ngOnInit(): void {
  }

}

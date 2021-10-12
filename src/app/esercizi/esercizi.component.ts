import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-esercizi',
  templateUrl: './esercizi.component.html',
  styleUrls: ['./esercizi.component.css']
})
export class EserciziComponent implements OnInit {    //component che mi serve solo per testare le nuove aggiunte, da ripulire di volta in volta


  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle('Esercizi');
  }
  
  

}

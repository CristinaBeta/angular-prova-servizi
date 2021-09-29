import { Component, Input, OnInit } from '@angular/core';
import { Grandezza } from '../interfacce/Grandezza';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css'],
})
export class GmapComponent implements OnInit {
  @Input() dimensione!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

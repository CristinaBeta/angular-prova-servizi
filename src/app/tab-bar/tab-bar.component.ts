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

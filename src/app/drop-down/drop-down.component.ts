import { Component, OnInit } from '@angular/core';
import { ElementiDD } from '../interfacce/elementi-dd';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  listaElementi: ElementiDD[] = [];

  constructor(private getService: GetService) { }

  ngOnInit(): void {
    this.getService.ottieniDatiPerDropDown()
    .subscribe(result => {
      this.listaElementi=result;
    });
  }

  mostraInfo(){
    console.log("ciao");
  }
}

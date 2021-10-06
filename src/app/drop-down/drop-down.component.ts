import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ElementiDD } from '../interfacce/elementi-dd';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  listaElementi: ElementiDD[] = [];
  size: string = "none";
  selectField: FormControl = new FormControl("3");    //valore di dafaul è 1, potrei non metterlo

  constructor(private getService: GetService) { }

  ngOnInit(): void {
    this.getService.ottieniDatiPerDropDown()
    .subscribe(result => {
      this.listaElementi=result;
    });
  }

  mostraInfo(le:ElementiDD){
    console.log(le.nome);
  }

  hello() {
    if (this.selectField.value == "1") {
      this.size = "big";
    } else if (this.selectField.value == "2") {
      this.size = "small";
    } else {
      this.size = "none";
    }
  }

}

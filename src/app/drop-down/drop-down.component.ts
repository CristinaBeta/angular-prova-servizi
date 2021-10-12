import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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

  constructor(private getService: GetService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('DropDown');
    this.getService.ottieniDatiPerDropDown()
    .subscribe(result => {
      this.listaElementi=result;
    });
  }

  mostraInfo(le:ElementiDD){
    alert(le.nome);
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

  alert(){
    alert("Lorem ipsum");
  }

  alert2(){
    alert('problemi di visualizzazione dovuti a popper, vedere con f12 3 elementi appena caricata pagina, ho provato a sostituie anche la versione separata con "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", ma nulla');
  }

}

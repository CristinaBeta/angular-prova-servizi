import { Component, OnInit } from '@angular/core';
import { Luce } from '../interfacce/Luce';

@Component({
  selector: 'app-dopo-login',
  templateUrl: './dopo-login.component.html',
  styleUrls: ['./dopo-login.component.css']
})
export class DopoLoginComponent implements OnInit {
  
  luci: Luce[] = [         
    { nome: "cucina", stato: true },
    { nome: "soggiorno", stato: false }
  ];
  nome:string = "";

  constructor() { 
    const token = sessionStorage.getItem('token');
    if(token != null)
    this.nome = token;
  }

  ngOnInit(): void {
  }

}

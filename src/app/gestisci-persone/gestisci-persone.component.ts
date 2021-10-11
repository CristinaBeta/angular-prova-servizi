import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult!: string;
  id: number=0;

  constructor(private getService: GetService, private route:Router, private activatedRoute: ActivatedRoute, private modalService: NgbModal) {
    
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
    //if listaDaSts() è già stato lanciato => listaDaSts()
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

  //modal
  open(content: any, id:number) {
    this.id = id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

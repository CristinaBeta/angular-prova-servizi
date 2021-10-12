import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs';
import { ModalService } from '../Services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  display$!: Observable<'open' | 'close'>;    //Un nuovo ! operatore di espressione post-correzione può essere usato per affermare che il suo operando è non nullo e non indefinito
                                              //se non si è certi che la variabile sia diversa da null, è consigliabile eseguire un controllo di asserzione esplicito.
  constructor(private modalService: ModalService, private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Modal');
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }
}

//Il codice del componente contiene una variabile Observable che istanziamo per controllare lo stato del modale, ed espone una funzione che possiamo usare per chiudere il modale.
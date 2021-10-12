import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragdrop]'
})
export class DragdropDirective {

  @Output() onFileDropped = new EventEmitter<any>();    //quando noi passeremo la funzione che viene chiamata quando rilasciamo il file, l'eventEmitter lancia l'oggetto

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(evt: any) {     //in questi due diciamo che vogliamo che non accada nulla quando ci passiamo sopra, ma solo nel ondrop (quando lo lasciamo)
    evt.preventDefault();
    evt.stopPropagation();  //annulla l'evento
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public ondrop(evt: any) {     //quando lasciamo il file annulliamo l'evento di default che è un input di tipo file
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;                         //prendiamo dall'evento il parametro dataTransfer ed in particolare tutti i file che stiamo rilasciando
    if(files.length > 0)  {                                     //controlliamo che ci sia qualcosa che stiamo effetitvamente lasciando
      this.onFileDropped.emit(files)                            //richiamiamo l'eventEmitter ed emettiamo l'array di file
    }
  }

}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[colorDirective]'    //da aggiungere sull'html per fargli assumere questa direttiva
})
export class ColorDirective {

  @Input() color!: string;        //lo possiamo aggiungere come parametro all'elemento html passandogli il colore

  constructor(private el: ElementRef) {   //questo prende l'elemento a cui assegnamo la direttiva

   }

   @HostListener('click') onClick(){          //@HostListener ci permette di creare una funzione evento
     alert("il colore è " + this.color);
   }

   @HostListener('mouseenter') onMouseEnter(){    //quando il mouse entra nell'area dell'elemento html chiamo il metodo colorize e gli passo un colore
     this.colorize(this.color);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.colorize(null);
  }

    private colorize(color: string | null) {              //imposta il background color del colore che gli ho passato
    this.el.nativeElement.style.backgroundColor = color;
  }



}

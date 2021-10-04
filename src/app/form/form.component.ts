import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!: FormGroup;   //non creo un attributo FormControl per ognuno

  constructor(public fb: FormBuilder) {    //crea un'istanza in modo automatico di FormBuilder nel momento in cui viene richiamato il componente. fb quindi sarà istanzito ed avrà la possibilità di chiamare le sue funzioni
 
    this.form = fb.group({
      //tutta la lista dei controlli ossia dei campi che vuole questo gruppo
    'user': ['', Validators.required],    //il primo campo è il valore di default..ad esempio se scrivessi 'ciao' il primo campo verrebbe già compilato con ciao
    'email': ['', Validators.required],       //il primo campo è il valore di default
    'nome': [''],
    'cognome': [''],
    'date': ['']
    });

  }

  ngOnInit(): void {
  }

  send(): void {
    if (!this.form.valid) {       //valid ritorna un boolean: true valido, false non valido. Se non è valido manda un alert, altrimenti stampa in console i valori dei vari campi
      alert("compilare tutti i campi obbligatori! -min username=6");
      return;
    }
    console.log(
      this.form.controls['user'].value,
      this.form.controls['email'].value,
      this.form.controls['date'].value,
    );
  }

  //singolo controllo su un campo
  checkUser() {
    let user = this.form.controls['user'].value;    //assegno ad this.form.controls['user'].value un alias
    if (!(user.length >= 6)) {                      //controllo la lunghezza..ci sono meno di 6 caratteri? (usato il ! al posto del < come esempio di contrario)
      this.form.controls['user'].setErrors({ incorect: true });   //setto gli errori, lo imposto manualmente in errore  -> se provo a fare il submit mi dirà di compilare i campi obbligatori
    } else {
      this.form.controls['user'].setErrors(null);       //tolgo gli errori che ho impostato nel caso in cui ce ne siamo almeno 6
    }
  }

}

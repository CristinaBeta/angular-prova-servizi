import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Persona } from '../model/persona.model';
import { Utente } from '../model/utente.model';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

      loading: boolean = false;
      persone:Utente[] = [];
      person = new Utente();
      personeDaSts: Persona[] = [];
      persona = new Persona();
      form!: FormGroup;   //non creo un attributo FormControl per ognuno

  constructor(private http: HttpClient, private postService:PostService, public fb: FormBuilder, private title:Title) {    //crea un'istanza in modo automatico di FormBuilder nel momento in cui viene richiamato il componente. fb quindi sarà istanziato ed avrà la possibilità di chiamare le sue funzioni
 
    this.form = fb.group({
      //tutta la lista dei controlli ossia dei campi che vuole questo gruppo
    'name': ['', Validators.required],    //il primo campo è il valore di default..ad esempio se scrivessi 'ciao' il primo campo verrebbe già compilato con ciao
    'age': ['', Validators.required],       //il primo campo è il valore di default
    'info': [''],
    'user': ['', Validators.required],
    'password': ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.title.setTitle('HTTP.POST');
    this.refreshPeople();
    this.refreshPersone();
  }

  refreshPeople() {
    this.loading = true;                                //prima di far partire la chiamata setto loading su true e quando ho ottenuto i dati lo faccio tornare su false
    this.postService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.persone=data;
        this.loading = false;
      })      
 
  }
 
  addPerson() {
    this.postService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }

  refreshPersone() {
    this.loading = true;                                //prima di far partire la chiamata setto loading su true e quando ho ottenuto i dati lo faccio tornare su false
    this.postService.getPersone()
      .subscribe(data => {
        console.log(data)
        this.personeDaSts=data;
        this.loading = false;
      })      
 
  }
 
  /*aggiungiPersona() {
    this.postService.addPersona(this.persona)
      .subscribe(data => {
        console.log(data)
        this.refreshPersone();
      })      
  }*/

  eliminaPersona(p:Persona) {
    this.postService.deletePersona(p).subscribe(data => {
      console.log(data)
      this.refreshPersone();
    })            
  }

  //FORM

  send(): void {
    if (!this.form.valid) {       //valid ritorna un boolean: true valido, false non valido. Se non è valido manda un alert
      alert("compilare tutti i campi obbligatori! -min username=4, min pass=6");
    }
    this.postService.addPersona(this.persona)
      .subscribe(data => {
        console.log(data)
        this.refreshPersone();
      })      
  }

  //singolo controllo su un campo
  checkUser() {
    let user = this.form.controls['user'].value;    //assegno ad this.form.controls['user'].value un alias
    if (!(user.length >= 4)) {                      //controllo la lunghezza..ci sono meno di 4 caratteri? (usato il ! al posto del < come esempio di contrario)
      this.form.controls['user'].setErrors({ incorect: true });   //setto gli errori, lo imposto manualmente in errore  -> se provo a fare il submit mi dirà di compilare i campi obbligatori
    } else {
      this.form.controls['user'].setErrors(null);       //tolgo gli errori che ho impostato nel caso in cui ce ne siamo almeno 4
    }
  }

  //singolo controllo su un campo
  checkPassword() {
    let user = this.form.controls['user'].value;    //assegno ad this.form.controls['user'].value un alias
    if (!(user.length >= 6)) {                      //controllo la lunghezza..ci sono meno di 6 caratteri? (usato il ! al posto del < come esempio di contrario)
      this.form.controls['user'].setErrors({ incorect: true });   //setto gli errori, lo imposto manualmente in errore  -> se provo a fare il submit mi dirà di compilare i campi obbligatori
    } else {
      this.form.controls['user'].setErrors(null);       //tolgo gli errori che ho impostato nel caso in cui ce ne siamo almeno 6
    }
  }

}

import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  title!: string | null;
  user!: string | null;
  toUpload: any = new Array();
  progress: number = 0;
  error!: string | null;

  constructor(public route: ActivatedRoute, public http: HttpClient, private t:Title) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('id');
      this.user = params.get('user');
    })
  }

  ngOnInit(): void {
    this.t.setTitle('Upload');
    console.log("start")
  }

  onDrag(event: File[]) {                                                      //event è la lista di file, un array di oggetti
    if (event.length > 1) {
      this.error = "Non è possibile caricare più di un file.";         //condizioni: solo un file, di tipo pdf, (di max 128mb)
    } else {
      let fileName = event[0].name;                                     //es. "pippo.jpg"
      let split = fileName.split(".");                                  //separa pippo da jpg
      let ext = split[split.length - 1].toLowerCase();                  //pippo è array alla posizione [0], prendo jpg che è alla posizione [1]
      if (ext != "pdf") {
        this.error = "Il file caricato non è un PDF";
      } /*else{
        if (event[0]).size >28000000) {
          this.error = "Il file caricato è troppo grande (Max 128MB)F";
        }*/else {
        this.toUpload.push(event[0]);
        this.error = null;
      }
    }
  }

  send(): void {
    this.progress = 0;            //valore percentuale del caricamento, parte da 0
    let formData = new FormData();      //formData è un modo per mandare paramentri al server
    formData.append('file', this.toUpload[0], this.toUpload[0].name);       //si chiama file, prendi il mio file, nome in stringa del file
    formData.append('request', "UPLOAD");                                   //stringa e valore "upload" così posso controllare la request
    this.error = null;
    this.http.post('http://', formData, {     //faccio una post su un server. qui c'è il codice che permette di salvare 
      reportProgress: true,                                                         //fammi vedere la percentuale
      observe: 'events'
    })
      /*.subscribe(events => {
        if (events.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(events.loaded / events.total * 100);
        } else if (events.type === HttpEventType.Response) {
          let res = events.body;
          if (res[0] == "OK") {
            this.toUpload = new Array();
            this.error = "File caricato con successo!";       //andrebbe creata un'altra variabile
          } else {
            this.error = res[1];
          }
        }
      });*/

  }

}

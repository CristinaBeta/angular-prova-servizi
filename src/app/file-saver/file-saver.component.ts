import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-file-saver',
  templateUrl: './file-saver.component.html',
  styleUrls: ['./file-saver.component.css']
})
export class FileSaverComponent implements OnInit {
  public text = '{ "text": "This is text file!" }';
  public fileName!: string;

  constructor(private http: HttpClient,
    /*private fss: FileSaverService*/) { }

  ngOnInit(): void {
  }

  /*onDown(type: string, fromRemote: boolean) {
    const fileName = `save.${type}`;
    if (fromRemote) {
      this.http.get(`assets/files/demo.${type}`, {
        observe: 'response',
        responseType: 'blob'
      }).subscribe(res => {
        this.fss.save(res.body, fileName);
      });
      return;
    }
    const fileType = this.fss.genType(fileName);
    const txtBlob = new Blob([this.text], { type: fileType });
    this.fss.save(txtBlob, fileName);
  }*/

}

import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-traduzione',
  templateUrl: './traduzione.component.html',
  styleUrls: ['./traduzione.component.css']
})
export class TraduzioneComponent implements OnInit {

  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');                     //cambiare con ita?
  }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}

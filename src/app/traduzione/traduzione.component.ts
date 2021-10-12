import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-traduzione',
  templateUrl: './traduzione.component.html',
  styleUrls: ['./traduzione.component.css']
})
export class TraduzioneComponent implements OnInit {

  constructor(private translate: TranslateService, private title:Title){
    translate.setDefaultLang('it');
  }

  ngOnInit(): void {
    this.title.setTitle('Traduzione');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}

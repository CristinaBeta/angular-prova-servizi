import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CondivisioneDatiService } from '../Services/condivisione-dati.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stato!:boolean;
  subscription!: Subscription;

  constructor(public storageService: StorageService, private data: CondivisioneDatiService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentStatus.subscribe(stato => this.stato = stato);
  }

  clickEvent() {
    this.data.changeStatus(!this.stato);
  }
}

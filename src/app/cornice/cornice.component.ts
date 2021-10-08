import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CondivisioneDatiService } from '../Services/condivisione-dati.service';

@Component({
  selector: 'app-cornice',
  templateUrl: './cornice.component.html',
  styleUrls: ['./cornice.component.css']
})
export class CorniceComponent implements OnInit {

  status!: boolean;
  subscription!: Subscription;

  constructor(private data: CondivisioneDatiService) { }

  ngOnInit() {
    this.subscription = this.data.currentStatus.subscribe(stato => this.status = stato)
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

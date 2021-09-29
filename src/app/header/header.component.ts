import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
  }

}

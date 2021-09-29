import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuovi-router',
  templateUrl: './nuovi-router.component.html',
  styleUrls: ['./nuovi-router.component.css']
})
export class NuoviRouterComponent implements OnInit {
  id: number= 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(utenti => {
      this.id = utenti['valoreDaPassare'];
    });
  }

}

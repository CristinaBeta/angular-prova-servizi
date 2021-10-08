import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondivisioneDatiService {

  private status = new BehaviorSubject(false);
  currentStatus = this.status.asObservable();

  constructor() { }

  changeStatus(stato: boolean) {
    this.status.next(stato);
  }
}

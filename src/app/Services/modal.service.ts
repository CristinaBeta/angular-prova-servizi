import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  //private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject('close');
  private display: Subject<'open' | 'close'> = new Subject();

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
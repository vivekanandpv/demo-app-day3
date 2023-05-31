import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private counterSubject = new BehaviorSubject<number>(0);

  counter$ = this.counterSubject.asObservable();

  constructor() {
    console.log('DataService created');
  }

  increment() {
    const current = this.counterSubject.value;
    this.counterSubject.next(current + 1);
  }

  decrement() {
    const current = this.counterSubject.value;
    this.counterSubject.next(current - 1);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rateDetails = new BehaviorSubject<any>('');
  public rateDetails$ = this.rateDetails.asObservable();
  constructor() { }

  getRateDetails(val) {
    this.rateDetails.next(val);
  }
}

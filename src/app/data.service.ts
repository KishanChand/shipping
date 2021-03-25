import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rateDetails = new BehaviorSubject<any>('');
  public rateDetails$ = this.rateDetails.asObservable();
  constructor(private http: HttpClient) { }

  getRateDetails(val) {
    this.rateDetails.next(val);
  }

  getfromCountry() {
    return this.http.get<any>(`http://agsconcreteartdesigns.in/skynet-india/api/website/origin_country`);
  }

  gettoCountry() {
    return this.http.get<any>(`http://agsconcreteartdesigns.in/skynet-india/api/website/destination_country`);
  }

  getfromCities() {
    return this.http.post<any>(`http://agsconcreteartdesigns.in/skynet-india/api/website/origin_city`, {"origin_country_id":3});
  }

}

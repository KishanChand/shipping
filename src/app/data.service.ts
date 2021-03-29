import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const httpHeaders = new HttpHeaders({
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rateDetails = new BehaviorSubject<any>('');
  public rateDetails$ = this.rateDetails.asObservable();
  test;
  constructor(private http: HttpClient) { }

  getRateDetails(val) {
    this.rateDetails.next(val);
  }

  getfromCountry() {
    return this.http.get<any>(`http://agsconcreteartdesigns.in/skynet-india/api/website/origin_country`);
  }

  gettoCountry(val) {
    console.log(val, 'ceckthis');
    fetch('http://agsconcreteartdesigns.in/skynet-india/api/website/news_details', {
      method: 'POST',
      body: JSON.stringify(
        {
            news_id : 1
        }
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json, 'fetch result'));
      this.test = {
          origin_country_id : 3
      }
    return this.http.post('http://agsconcreteartdesigns.in/skynet-india/api/website/destination_country', this.test);
  }

  getfromCities() {
    return this.http.post<any>(`http://agsconcreteartdesigns.in/skynet-india/api/website/origin_city`, JSON.stringify({origin_country_id:3}), {headers: httpHeaders});
  }

}

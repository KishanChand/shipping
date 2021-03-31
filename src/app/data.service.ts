import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { baseUrl } from './config';

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
  constructor(private http: HttpClient) { }

  getRateDetails(val) {
    this.rateDetails.next(val);
  }

  getfromCountry() {
    return this.http.get<any>(`http://agsconcreteartdesigns.in/skynet-india/api/website/origin_country`);
  }

  gettoCountry(val) {
    return this.http.post(baseUrl+'website/destination_country', '');
  }

  getfromCities() {
    return this.http.post<any>(`http://agsconcreteartdesigns.in/skynet-india/api/website/origin_city`, JSON.stringify({origin_country_id:3}), {headers: httpHeaders});
  }

  originCountryList() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.http.get(baseUrl+'website/origin_country', {headers: header});
  }

  destinationCountryList(origin_country_id) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    let postData = {
      "origin_country_id" : origin_country_id
    };

    return this.http.post(baseUrl+'website/destination_country', postData, {headers: header});
  }

  ourServiceList() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.http.get(baseUrl+'website/our_service_list', {headers: header});
  }

  newsList() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.http.get(baseUrl+'website/news_list', {headers: header});
  }

  findLocation() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.http.get(baseUrl+'website/contact_list', {headers: header});
  }

  careerList() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.http.get(baseUrl+'website/career_list', {headers: header});
  }

  priceCalc(val) {
    console.log(val, 'check our inputs')
    let header = new HttpHeaders();
    return this.http.post(baseUrl+'website/price_calculation', val, {headers: header});
  }

  createShipmentApi(val) {
    let header = new HttpHeaders();
    return this.http.post(baseUrl+'website/create_shipment', val, {headers: header});
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../.././data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { interval, Subject } from 'rxjs';
import { exit } from 'process';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fromCountries:any = [];
  toCountries:any;
  fromCities:any = [];
  ourService:any = [];
  allNews:any = [];
  selectedCountryVal:any;
  constructor(private dataCenter:DataService, private router:Router) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.originCountryList();
    this.ourServiceList();
    this.newsList();
  }

  originCountryList() {
    this.dataCenter.originCountryList().subscribe((response: any) => {
      if(response.Status == "Success") {
        this.fromCountries = response.countryList;
      } else {
        this.fromCountries = [];
      }
    });
  }

  destinationCountry(event) {
    let originCountryId = event.target.value;
    if(originCountryId != "") {
      this.dataCenter.destinationCountryList(originCountryId).subscribe((response: any) => {
        if(response.Status == "Success") {
          this.toCountries = response.countryList;
        } else {
          this.toCountries = [];
        }
        console.log(this.toCountries, '+++');
      });
    } else {
      this.toCountries = [];
    }
  }

  ourServiceList() {
    this.dataCenter.ourServiceList().subscribe((response: any) => {
      if(response.Status == "Success") {
        this.ourService = response.ourServiceList;
      } else {
        this.ourService = [];
      }
    });
  }

  newsList() {
    this.dataCenter.newsList().subscribe((response: any) => {
      if(response.Status == "Success") {
        this.allNews = response.newsList;
      } else {
        this.allNews = [];
      }
    });
  }

  singleTrack(vald) {
    // console.log(vald, '++');
    window.open('https://tracking.frontierforce.com/tracking.aspx?stid=skynet&cn='+vald, "_blank");
  }

  multipleTrack() {
    window.open("https://tracking.frontierforce.com/tracking_search.aspx?stid=skynet", "_blank");
  }

  findFromCities(eve) {
    console.log(eve.target.value, '++test');
    this.selectedCountryVal = {
      "origin_country_id": eve.target.value
    }
    this.dataCenter.getfromCities().subscribe(x => {
      console.log(x, 'testing peace goes here');
    });
    this.dataCenter.gettoCountry(this.selectedCountryVal).subscribe(x => {
      this.toCountries = x;
      console.log(this.toCountries, 'check this++');
    });
  }

  ngAfterViewInit(){
    $('.slider-container').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      adaptiveHeight: true
    });
  }

  domesticForm = new FormGroup({
    fromCountry: new FormControl('', Validators.required),
    toCountry: new FormControl('', Validators.required),
    // fromCity: new FormControl('', Validators.required),
    // toCity: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required)
  });

  get fromCountry() {return this.domesticForm.get('fromCountry')}
  get toCountry() { return this.domesticForm.get('toCountry')}
  get fromCity() { return this.domesticForm.get('fromCity')}
  get toCity() { return this.domesticForm.get('toCity')}
  get weight() { return this.domesticForm.get('weight') }
  get unit() { return this.domesticForm.get('unit') }

  ratingDetails() {
    this.dataCenter.getRateDetails(this.domesticForm.value);
    this.router.navigate([ '/rate' ]);
  }

}

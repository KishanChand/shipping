import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  fromCountries:any = [];
  toCountries:any = [];
  collectRateDetails = ''; 
  selectedCountryVal:any;
  constructor(private dataCenter:DataService, public fb:FormBuilder) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.dataCenter.getfromCountry().subscribe(x => {
      this.fromCountries = x.countryList;
    });
    this.dataCenter.rateDetails$.subscribe(x => {
      this.rateCalc.patchValue(x);
    });
  }

  findFromCities(eve) {
    this.selectedCountryVal = {
      "origin_country_id": eve.target.value
    }
    this.dataCenter.gettoCountry(this.selectedCountryVal).subscribe(x => {
      this.toCountries = x;
      console.log(this.toCountries, 'check this');
    });
  }

  rateCalc = new FormGroup({
    fromCountry: new FormControl('', Validators.required),
    toCountry: new FormControl('', Validators.required),
    // fromCity: new FormControl('', Validators.required),
    // toCity: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required)
  });

  rateCalculator() {
    console.log(this.rateCalc.value);
  }

}

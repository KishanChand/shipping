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
  constructor(private dataCenter:DataService, public fb:FormBuilder) { }

  ngOnInit() {
    this.dataCenter.getfromCountry().subscribe(x => {
      this.fromCountries = x.countryList;
    });
    this.dataCenter.gettoCountry().subscribe(x => {
      this.toCountries = x.countryList;
    });
    this.dataCenter.rateDetails$.subscribe(x => {
      this.rateCalc.patchValue(x);
    });
  }

  rateCalc = new FormGroup({
    fromCountry: new FormControl('', Validators.required),
    toCountry: new FormControl('', Validators.required),
    fromCity: new FormControl('', Validators.required),
    toCity: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required)
  });

  rateCalculator() {
    console.log(this.rateCalc.value);
  }

}

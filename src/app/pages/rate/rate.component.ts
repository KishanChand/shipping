import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(
    private dataCenter:DataService, 
    public fb:FormBuilder,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.originCountryList();
    this.dataCenter.rateDetails$.subscribe(x => {
      if(x != null && x != undefined && x != '') {
        this.destinationCountry(x.fromCountry);
        this.rateCalc.patchValue(x);
      }
    });
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
    let originCountryId
    if(event.target == undefined) {
      originCountryId = event;
    } else {
      originCountryId = event.target.value
    }
    if(originCountryId != "") {
      this.dataCenter.destinationCountryList(originCountryId).subscribe((response: any) => {
        if(response.Status == "Success") {
          this.toCountries = response.countryList;
        } else {
          this.toCountries = [];
        }
      });
    } else {
      this.toCountries = [];
    }
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

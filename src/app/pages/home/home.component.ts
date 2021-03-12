import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../.././data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataCenter:DataService, private router:Router) { }

  ngOnInit() {
   
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
    fromCity: new FormControl('', Validators.required),
    toCity: new FormControl('', Validators.required),
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
    console.log(this.domesticForm.value, 'testing');
    this.dataCenter.getRateDetails(this.domesticForm.value);
    this.router.navigate([ '/rate' ]);
  }

}

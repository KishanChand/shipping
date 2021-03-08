import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

}

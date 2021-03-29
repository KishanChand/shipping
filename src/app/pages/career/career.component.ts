import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../.././data.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  allCareerList: any = [];

  constructor(
    private dataCenter:DataService, 
    private router:Router
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.careerList();
  }

  careerList() {
    this.dataCenter.careerList().subscribe((response: any) => {
      if(response.Status == "Success") {
        this.allCareerList = response.careerList;
      } else {
        this.allCareerList = [];
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../.././data.service';

@Component({
  selector: 'app-maplocation',
  templateUrl: './maplocation.component.html',
  styleUrls: ['./maplocation.component.scss']
})
export class MaplocationComponent implements OnInit {

  locationList: any = [];

  constructor(
    private dataCenter:DataService, 
    private router:Router
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.findLocation();
  }

  findLocation() {
    this.dataCenter.findLocation().subscribe((response: any) => {
      if(response.Status == "Success") {
        this.locationList = response.contactList;
      } else {
        this.locationList = [];
      }
      console.log(this.locationList)
    });
  }
}

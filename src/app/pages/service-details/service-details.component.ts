import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  curServiceId:Number;
  serviceContent:any;
  lastId:Number;

  constructor(private ds:DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.ds.serviceDetailId$.subscribe(x => {
        this.curServiceId = x;
    });

    this.ds.detailService(this.curServiceId).subscribe((data:any) => {
      console.log(data, 'response data');
      if(data.Status == "Success") {
        this.serviceContent = data.ourServiceDetails.service_content;
      } else {
        this.serviceContent = 'No Data Available';
      }
    });

  }

}

import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-maplocation',
  templateUrl: './maplocation.component.html',
  styleUrls: ['./maplocation.component.scss']
})
export class MaplocationComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }

}

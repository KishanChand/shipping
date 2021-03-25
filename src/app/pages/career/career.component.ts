import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
      window.scrollTo(0, 0);
  }

}

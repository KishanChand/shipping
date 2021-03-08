import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'go-courier';
  showHead:boolean = true;
  constructor(
    private router: Router,
    ){
   
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/book-collection' || event['url'] == '/book-shipment') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });

    /* if(this.common.isLoggedIn()){
      this.router.navigate(['dashboard'])
    }else{
      this.router.navigate(['login'])
    } */
  }
  
}

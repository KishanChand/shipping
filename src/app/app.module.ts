import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/includes/header/header.component';
import { FooterComponent } from './pages/includes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BookShipmentComponent } from './pages/book-shipment/book-shipment.component';
import { BookCollectionComponent } from './pages/book-collection/book-collection.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { RateComponent } from './pages/rate/rate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookShipmentComponent,
    BookCollectionComponent,
    ServiceDetailsComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

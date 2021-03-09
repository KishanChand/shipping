import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCollectionComponent } from './pages/book-collection/book-collection.component';
import { BookShipmentComponent } from './pages/book-shipment/book-shipment.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: HomeComponent
  },
  {
    path: 'book-shipment',
    pathMatch:'full',
    component: BookShipmentComponent
  },
  {
    path: 'book-collection',
    pathMatch:'full',
    component: BookCollectionComponent
  },
  {
    path: 'service-details',
    pathMatch: 'full',
    component: ServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

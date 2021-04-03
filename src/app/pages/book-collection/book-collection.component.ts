import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { DataService } from '../../data.service';

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {
  collectionFormGroup: FormGroup;
  country: Country[] = [
      {value: 'india-0', viewValue: 'India'},
      {value: 'abudhabi-1', viewValue: 'Abudhabi'},
      {value: 'dubai-2', viewValue: 'Dubai'}
  ];

  constructor(private dataRev:DataService, private _formBuilder:FormBuilder) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.collectionFormGroup = this._formBuilder.group({
        originCountry: [''],
        destinationCountry: [''],
        collectionDate: [''],
        collectionTime: [''],
        cutoffTime: [''],
        vehicleType: [''],
        specilInst: [''],
        kycType: [''],
        cashType: ['']
    });
  }

}

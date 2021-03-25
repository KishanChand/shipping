import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataService } from '../.././data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

declare var $:any;
interface Country {
    value: string;
    viewValue: string;
}
@Component({
  selector: 'app-book-shipment',
  templateUrl: './book-shipment.component.html',
  styleUrls: ['./book-shipment.component.scss']
})
export class BookShipmentComponent implements OnInit, AfterViewChecked {

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    toppings = new FormControl();
    country: Country[] = [
        {value: 'india-0', viewValue: 'India'},
        {value: 'abudhabi-1', viewValue: 'Abudhabi'},
        {value: 'dubai-2', viewValue: 'Dubai'}
    ];

    constructor(private dataRev:DataService, private _formBuilder: FormBuilder) { }

    ngOnInit() {
        $(document).ready( ()=> {
            $('.nav-tabs > li a[title]').tooltip();
            
            //Wizard
            $('a[data-toggle="tab"]').on('shown.bs.tab',  (e)=> {
        
                var target = $(e.target);
            
                if (target.parent().hasClass('disabled')) {
                    return false;
                }
            });
        
            $(".next-step").click( (e)=> {
        
                var active = $('.wizard .nav-tabs li.active');
                active.next().removeClass('disabled');
                this.nextTab(active);
        
            });
            $(".prev-step").click( (e)=> {
        
                var active = $('.wizard .nav-tabs li.active');
                this.prevTab(active);
        
            });
        });    
        $('.nav-tabs').on('click', 'li', function() {
            $('.nav-tabs li.active').removeClass('active');
            $(this).addClass('active');
        });



        this.firstFormGroup = this._formBuilder.group({
            dateCtrl: [''],
            consignorCtrl: [''],
            contactPersonCtrl: [''],
            snCtrl: [''],
            zipCtrl: [''],
            countryCtrl: ['', Validators.required],
            telephoneCtrl: ['', Validators.required],
            faxCtrl: [''],
            emailCtrl: ['', Validators.required],
            refCtrl: [''],
            companyCtrl: ['', Validators.required],
            attentionCtrl: ['', Validators.required],
            rsnCtrl: ['', Validators.required],
            cityCtrl: ['', Validators.required],
            rzipCtrl: [''],
            rcountryCtrl: ['', Validators.required],
            rtelephoneCtrl: ['', Validators.required],
            mobileCtrl: ['', Validators.required],
            rfaxCtrl: [''],
            remailCtrl: [''],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

    ngAfterViewChecked() {
        window.scrollTo(0, 0);
    }

    nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }

}

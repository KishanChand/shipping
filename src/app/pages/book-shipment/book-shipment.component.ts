import { Component, OnInit } from '@angular/core';
import { DataService } from '../.././data.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

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
export class BookShipmentComponent implements OnInit {

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thridFormGroup: FormGroup;
    addForm: FormGroup;
    toppings = new FormControl();
    totalVWeight:Number = 0;
    totalWeight:Number = 0;
    chargeableWeight:Number = 0;
    country: Country[] = [
        {value: 'india-0', viewValue: 'India'},
        {value: 'abudhabi-1', viewValue: 'Abudhabi'},
        {value: 'dubai-2', viewValue: 'Dubai'}
    ];

    constructor(private dataRev:DataService, private _formBuilder: FormBuilder) { }

    ngOnInit() {
        window.scrollTo(0, 0);
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
            secondTabService: ['', Validators.required],
            secondTabCountry: ['', Validators.required],
            secondTabType: ['', Validators.required],
            secondTabVal: ['', Validators.required],
            totalPiece: ['', Validators.required]
        });
        this.thridFormGroup = this._formBuilder.group({
            collectionDate: [''],
            collectionTime: [''],
            cutoffTime: [''],
            vehicleType: [''],
            specilInst: [''],
            kycType: [''],
            cashType: ['']
        });
        this.addForm = this._formBuilder.group({
            no: [''],
            weight: [''],
            length: [''],
            width: [''],
            height: [''],
            volume: [''],
            description: [''],
            itemDetails: [''],
            itemRows: this._formBuilder.array([this.initRows()])
        });
    }

    get formArr() {
        return this.addForm.get('itemRows') as FormArray;
    }

    initRows() {
        return this._formBuilder.group({
            no: [''],
            weight: [''],
            length: [''],
            width: [''],
            height: [''],
            volume: [''],
            description: [''],
            itemDetails: ['']
        });
    }

    addNewRow() {
        this.formArr.push(this.initRows());
    }

    deleteRow(index: number) {
        this.formArr.removeAt(index)
    }

    weight(val) {
        // this.formArr.value.map(x => {
        //     // this.totalWeight = Number(this.totalWeight) + Number(x.weight);
        //     console.log(x.weight);
        // })
        this.totalWeight = Number(this.totalWeight) + Number(val);
        this.chrgWeight();    
    }

    vWeight(val) {
        this.totalVWeight = Number(this.totalVWeight) + Number(val);
        this.chrgWeight();
    }

    chrgWeight() {
        if(this.totalWeight > this.totalVWeight) {
            this.chargeableWeight = this.totalWeight;
        } else {
            this.chargeableWeight = this.totalVWeight;
        }
    }


    nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }

}

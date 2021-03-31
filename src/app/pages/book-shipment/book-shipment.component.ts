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
    totalAmount:Number = 0;
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
            volume_width: [''],
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
            volume_width: [''],
            description: [''],
            item_details: ['']
        });
    }

    addNewRow() {
        this.formArr.push(this.initRows());
    }

    deleteRow(index: number) {
        this.formArr.removeAt(index)
    }

    weight(val) {
        let xvalue = [];
        this.formArr.value.map(x => {
            if(x != '') {
                xvalue.push(Number(x.weight));
            }
        });
        let weight = xvalue.reduce(function (accumulator, current) {
            return accumulator + current;
        });
        this.totalWeight = weight;
        this.chrgWeight();    
    }

    vWeight(val) {
        let vValue = [];
        this.formArr.value.map(x => {
            if(x != '') {
                vValue.push(Number(x.volume_width));
            }
        });
        let vWeight = vValue.reduce(function (accumulator, current) {
            return accumulator + current;
        });
        this.totalVWeight = vWeight;
        this.chrgWeight();
    }

    chrgWeight() {
        if(this.totalWeight > this.totalVWeight) {
            this.chargeableWeight = this.totalWeight;
        } else {
            this.chargeableWeight = this.totalVWeight;
        }
    }

    createShipment() {
        let createShipmentData = {
            "id": '',
            "shipment_date": this.firstFormGroup.value.dateCtrl,
    "sender_consignor": this.firstFormGroup.value.consignorCtrl,
    "sender_contact_person": this.firstFormGroup.value.contactPersonCtrl,
    "sender_street_name_number": this.firstFormGroup.value.sender_street_name_number,
    "sender_zip_code": this.firstFormGroup.value.sender_zip_code,
    "sender_country": this.firstFormGroup.value.countryCtrl,
    "sender_telephone": this.firstFormGroup.value.telephoneCtrl,
    "sender_fax": this.firstFormGroup.value.faxCtrl,
    "sender_email": this.firstFormGroup.value.emailCtrl,
    "reference_number": this.firstFormGroup.value.refCtrl,
    "receiver_company_name": this.firstFormGroup.value.companyCtrl,
    "receiver_attention": this.firstFormGroup.value.attentionCtrl,
    "receiver_street_name_number": this.firstFormGroup.value.rsnCtrl,
    "receiver_city": this.firstFormGroup.value.cityCtrl,
    "receiver_zip_code": this.firstFormGroup.value.rzipCtrl,
    "receiver_country": this.firstFormGroup.value.rcountryCtrl,
    "receiver_telephone": this.firstFormGroup.value.rtelephoneCtrl,
    "receiver_mobile": this.firstFormGroup.value.mobileCtrl,
    "receiver_fax": this.firstFormGroup.value.rfaxCtrl,
    "receiver_email": this.firstFormGroup.value.remailCtrl,
    "service": this.secondFormGroup.value.secondTabService,
    "currency": this.secondFormGroup.value.secondTabCountry,
    "type": this.secondFormGroup.value.secondTabType,
    "value": this.secondFormGroup.value.secondTabVal,
    "total_weight": this.totalWeight,
    "total_volume_weight": this.totalVWeight,
    "total_chargeable_weight": this.chargeableWeight,
    "total_amount": this.totalAmount,
    "collection_date": this.thridFormGroup.value.collectionDate,
    "collection_ready_time": this.thridFormGroup.value.collectionTime,
    "collection_close_time": this.thridFormGroup.value.collection_close_time,
    "vehicle_type": this.thridFormGroup.value.vehicle_type,
    "special_instruction": this.thridFormGroup.value.special_instruction,
    "kyc_type": this.thridFormGroup.value.kyc_type,
    "kyc_document": "",
    "payment_type": this.thridFormGroup.value.cashType,
    "shipment_items": this.formArr.value
        }

        this.dataRev.createShipmentApi(createShipmentData).subscribe(x => {
            console.log(x);
        });
    }


    nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }

}

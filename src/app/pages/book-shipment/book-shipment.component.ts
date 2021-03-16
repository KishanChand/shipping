import { Component, OnInit } from '@angular/core';
import { DataService } from '../.././data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $:any;
@Component({
  selector: 'app-book-shipment',
  templateUrl: './book-shipment.component.html',
  styleUrls: ['./book-shipment.component.scss']
})
export class BookShipmentComponent implements OnInit {

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

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
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

    nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }

}

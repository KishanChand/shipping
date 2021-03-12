import { Component, OnInit } from '@angular/core';
import { DataService } from '../.././data.service';
declare var $:any;
@Component({
  selector: 'app-book-shipment',
  templateUrl: './book-shipment.component.html',
  styleUrls: ['./book-shipment.component.scss']
})
export class BookShipmentComponent implements OnInit {

    constructor(private dataRev:DataService) { }

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
    }

    nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }

}

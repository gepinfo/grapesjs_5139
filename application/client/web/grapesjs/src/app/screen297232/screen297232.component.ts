import { Component, OnInit, ViewChild } from '@angular/core';
import { Screen297232Service } from './screen297232.service';





@Component({
  selector: 'app-screen297232',
  templateUrl: './screen297232.component.html',
  styleUrls: ['./screen297232.component.scss'],
})

export class Screen297232Component implements OnInit {
    public grapesjstest:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        grape_name: '',
        my_name: '',
    }




    constructor (
        private screen297232Service: Screen297232Service,
    ) { }

    ngOnInit() {
        this.grapesjstest.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}
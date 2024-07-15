import { Component, OnInit, ViewChild } from '@angular/core';
import { GrapesjstestService } from './grapesjstest.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';


interface DataItem {
  grape_name: String;
  my_name: String;
  enter_name: String;
  isExpanded: Boolean;
  isSelected: Boolean;
  isLeaf: Boolean;
  parent_id: String;
  id: String;
  category: String;
  gephistoryid: String;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-grapesjstest',
  templateUrl: './grapesjstest.component.html',
  styleUrls: ['./grapesjstest.component.scss'],
})

export class GrapesjstestComponent implements OnInit {
public searchtickets:any;
    public grapesjstest:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        grape_name: '',
        my_name: '',
        enter_name: '',
        parent_id: '',
        id: '',
        gephistoryid: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private grapesjstestService: GrapesjstestService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.grapesjstest.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }

   showModal(): void {
    this.isVisibleCreate = true;
   }

  handleOk(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }

  handleCancel(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }




     Create() {
      this.isVisibleCreate = false;
        this.grapesjstestService.PostAllgrapesjstestValues(this.grapesjstest).subscribe((data:any) => {
            this.grapesjstest.grape_name = '',
            this.grapesjstest.my_name = '',
            this.grapesjstest.enter_name = '',
            this.grapesjstest.parent_id = '',
            this.grapesjstest.id = '',
            this.grapesjstest.gephistoryid = '',
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    filterStatus = [
      { text: 'Active', value: 'ACTIVE' },
      { text: 'In-Active', value: 'INACTIVE' }
    ];
  
    filterAccessProfile = [
      { text: 'Receptionist', value: 'Receptionist' },
      { text: 'Health Care Provide', value: 'Health Care Provide' }
    ]
  
    
  
    listOfData: DataItem[] = [];

    Update() {
        this.grapesjstestService.Updategrapesjstest(this.grapesjstest).subscribe((data:any) => {
            this.grapesjstest.grape_name = '';
            this.grapesjstest.my_name = '';
            this.grapesjstest.enter_name = '';
            this.grapesjstest.parent_id = '';
            this.grapesjstest.id = '';
            this.grapesjstest.gephistoryid = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.grapesjstestService.DeletegrapesjstestValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.grapesjstestService.GetAllgrapesjstestValues().subscribe((data: any) => {
            this.listOfData = data;
            console.log(data);
        },
        (error: Error) => {
            console.log('Error', error);
        });
    }


    search(search:any){
    if(search.length >= 2){
        const targetValue: any[] = [];
        this.listOfData.forEach((value: any) => {
            let keys = Object.keys(value);
            for (let i = 0; i < keys.length; i++) {
                if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
                    targetValue.push(value);
                    break;
                }
            }
        });
        this.listOfData = targetValue;
        } else {
            this.GetAllValues();
        }
    }


    cancel(): void {
        this.nzMessageService.info('click cancel');
    }

    confirmDelete(data:any): void {
        this.nzMessageService.info('click confirm');
        this.Delete(data.id);
    }

    getUpdateById(data:any){
        this.isVisibleUpdate = true;
        this.grapesjstest = data;
    }
}

  
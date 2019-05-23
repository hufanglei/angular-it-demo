import { Component } from '@angular/core';


import { StorageService } from '../services/storage.service';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    public list:any=[];

    public config:any={};

    constructor(public storage:StorageService,public common:CommonService){

      this.config=this.common.config;
      
    }
   
    ionViewDidEnter(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getCartsData();
    }

    getCartsData(){
      var cartList=this.storage.get('cartList');   
      if(cartList){
        this.list=cartList;
      }else{
        this.list=[];
      }     
    }


}

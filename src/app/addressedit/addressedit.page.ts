import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-addressedit',
  templateUrl: './addressedit.page.html',
  styleUrls: ['./addressedit.page.scss'],
})
export class AddresseditPage implements OnInit {


  public addressList:any={};
  public userinfo:any={};
  constructor(public activatedRoute: ActivatedRoute,public common:CommonService,public storage:StorageService,public navController:NavController) { }

  ngOnInit() {

    var userinfo=this.storage.get('userinfo');
    
    this.userinfo=userinfo;


    this.activatedRoute.queryParams.subscribe((data)=>{

        //data 返回的get传值对象是一个不可改变的对象    注意
        this.addressList=JSON.parse(JSON.stringify(data));
    })
  }

  doEditAddress(){

    console.log(this.addressList);


    var sign=this.common.sign({
      uid:this.userinfo._id,       
      name:this.addressList.name,
      id:this.addressList._id,
      phone:this.addressList.phone,
      address:this.addressList.address,
      salt:this.userinfo.salt   //私钥
    })

    var api="api/editAddress";
    this.common.ajaxPost(api,{

      uid:this.userinfo._id,       
      name:this.addressList.name,
      id:this.addressList._id,
      phone:this.addressList.phone,
      address:this.addressList.address,
      sign:sign
    }).then((data:any)=>{
        if(data.success){
          this.navController.back();
        }else{
          alert(data.message);
        }
    })




  }

}

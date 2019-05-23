import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-addressadd',
  templateUrl: './addressadd.page.html',
  styleUrls: ['./addressadd.page.scss'],
})
export class AddressaddPage implements OnInit {

  public addressList:any={
    name:'',
    phone:'',
    address:''
  }
  public userinfo:any={};

  constructor(public common:CommonService,public storage:StorageService,public navController:NavController) { }

  ngOnInit() {

    var userinfo=this.storage.get('userinfo');
    
    this.userinfo=userinfo;
   

  }

  doAddAddress(){

    //执行增加之前需要判断数据是否合成   自己完成
    if(!this.addressList.name || !this.addressList.phone || !this.addressList.address){

      alert('输入错误')
    }else{


      //生成签名
      var sign=this.common.sign({
        uid:this.userinfo._id,       
        name:this.addressList.name,
        phone:this.addressList.phone,
        address:this.addressList.address,
        salt:this.userinfo.salt   //私钥
      })

      var addJson={
        uid:this.userinfo._id,
        sign:sign,
        name:this.addressList.name,
        phone:this.addressList.phone,
        address:this.addressList.address        
      }
      var api='api/addAddress';
      this.common.ajaxPost(api,addJson).then((data:any)=>{
        // console.log(data);
        if(data.success){
          this.navController.back();
        }else{
          alert(data.message);
        }
      })


    }

  }

}

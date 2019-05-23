import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController} from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public returnUrl='';
  public userinfo:any={};

  public list:any[]=[];
  public config:any={};

  public addressList:any={};

  constructor(public activatedRoute: ActivatedRoute,public navController:NavController,public storage:StorageService,public common:CommonService) { 

    this.config=this.common.config;
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((data: any) => {   
      
      data.returnUrl? this.returnUrl=data.returnUrl:this.returnUrl='/tabs/tab3';
     
    })
  }
  ionViewDidEnter(){

    //获取用户信息
    var userinfo=this.storage.get('userinfo');
    if(userinfo && userinfo.username){
      this.userinfo=userinfo;
      //用户登录后获取默认收货地址
      this.getDefaultAddress();

    }else{
      this.userinfo='';
    }
    //获取去结算的商品
    this.list=this.storage.get('checkoutData');
    console.log(this.list);  
  }


  //获取默认收货地址

  getDefaultAddress(){


    var sign=this.common.sign({
      uid:this.userinfo._id,   //注意uid
      salt:this.userinfo.salt
    })

    var api='api/oneAddressList?uid='+this.userinfo._id+'&sign='+sign;
    this.common.ajaxGet(api).then((data:any)=>{
      console.log(data)
      if(data.success){
        this.addressList=data.result[0];
      }else{
        alert(data.message)

      }
    })

  }

  goBack(){

    this.navController.navigateBack(this.returnUrl);
  }

}

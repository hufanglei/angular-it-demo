import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-registerstep1',
  templateUrl: './registerstep1.page.html',
  styleUrls: ['./registerstep1.page.scss'],
})
export class Registerstep1Page implements OnInit {

  public tel:any='';

  constructor(public navController:NavController,public common:CommonService,public storage:StorageService) { }

  ngOnInit() {
  }

  goRegisterSetp2(){

    //验证电话号码是否合法
    
    
    if(/^\d{11}$/.test(this.tel)){

       
      
      var api='api/sendCode';
      this.common.ajaxPost(api,{"tel":this.tel}).then((response:any)=>{

        console.log(response);

        if(response.success){
          
          //保存手机号
          this.storage.set('tel',this.tel);
          this.navController.navigateForward('/registerstep2');
        }else{

          alert('发送验证码失败'+response.message);
        }
        
      })
     
    }else{
      alert('电话号码格式不正确');
    }

  }
}

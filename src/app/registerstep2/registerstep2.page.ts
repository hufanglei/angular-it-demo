import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-registerstep2',
  templateUrl: './registerstep2.page.html',
  styleUrls: ['./registerstep2.page.scss'],
})
export class Registerstep2Page implements OnInit {

  public num:any=10;
  public sendCodeBtn=false;
  public tel:any='';
  public code:any='';

  constructor(public navController:NavController,public common:CommonService,public storage:StorageService) {

    this.tel=this.storage.get('tel');
   }

  ngOnInit() {

    this.doTimer();
  }

  goRegisterSetp3(){
    //验证验证码

    var api='api/validateCode';
    this.common.ajaxPost(api,{"tel":this.tel,"code":this.code}).then((response:any)=>{        
        if(response.success){          
          //保存验证码   
          this.storage.set('code',this.code);
          this.navController.navigateForward('/registerstep3');
        }else{
          alert('验证码输入错误');
        }
    })


  }

  //倒计时
  doTimer(){

      var timer=setInterval(()=>{
          this.num--;
          if(this.num==0){
            this.sendCodeBtn=true;
            clearInterval(timer);
          }
      },1000)
  }

  //重新发送验证码

  sendCode(){

      var api='api/sendCode';
      this.common.ajaxPost(api,{"tel":this.tel}).then((response:any)=>{

        console.log(response);

        if(response.success){
            alert('发送验证码成功');

            this.num=10;
            this.sendCodeBtn=false;
            this.doTimer();  
        }else{

          alert('发送验证码失败'+response.message);
        }
        
      })

  }

}

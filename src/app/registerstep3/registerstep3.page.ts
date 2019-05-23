import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-registerstep3',
  templateUrl: './registerstep3.page.html',
  styleUrls: ['./registerstep3.page.scss'],
})
export class Registerstep3Page implements OnInit {


  public tel:any='';
  public code:any='';
  public password:any="";
  public rpassword:any="";

  constructor(public storage:StorageService,public common:CommonService,public navController:NavController,public eventService:EventService) {
    //获取tel  code
    this.tel=this.storage.get('tel');
    this.code=this.storage.get('code');
   }

  ngOnInit() {


  }

  doRegister(){

    //简单验证    、 服务器也需要验证      
    if(this.password!=this.rpassword){
        alert('密码确认密码输入错误');
    }else if(this.password.length<6){
      alert('密码长度不能小于6位');
    }else{


        var api='api/register';

        var postJson={
          tel:this.tel,
          code:this.code,
          password:this.password
        }
        this.common.ajaxPost(api,postJson).then((response:any)=>{

            console.log(response);
            if(response.success){
                // 1、保存用户信息         2、跳转到首页

                this.storage.set('userinfo',response.userinfo[0]);
                //通知用户中心更新用户信息
                this.eventService.event.emit('useraction');

                //回到根
                this.navController.navigateRoot('/tabs/tab4');    

               

            }else{

              alert('注册失败');
            }

        })
    }


  }

}

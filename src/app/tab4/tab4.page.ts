import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

import { EventService } from '../services/event.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public userinfo:any={};

  constructor(public storage:StorageService,public eventService:EventService) {
      //初始化用户信息
      var userinfo=this.storage.get('userinfo');
      if(userinfo && userinfo.username){
        this.userinfo=userinfo;
      }else{
        this.userinfo='';
      }      


   }

  ngOnInit() {

    //监听注册 登录成功的事件
    this.eventService.event.on('useraction',()=>{
        var userinfo=this.storage.get('userinfo');
        if(userinfo && userinfo.username){
          this.userinfo=userinfo;
        }else{
          this.userinfo='';
        } 
      
    })
  

  }


  //在页面tab切换  以及第一次加载的时候会触发    但是login返回的时候没法触发
  ionViewWillEnter(){

    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){

    console.log('ionViewDidEnter');
  }

  
  //解决问题：注册、登录成功返回以后立即显示用户信息  

 
}

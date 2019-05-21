import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.page.html',
  styleUrls: ['./pinfo.page.scss'],
})
export class PinfoPage implements OnInit {

  public returnUrl:any='';

  constructor(public nav:NavController,public activatedRoute:ActivatedRoute) { }
  

  ngOnInit() {


    this.activatedRoute.queryParams.subscribe((data)=>{

       this.returnUrl=data.returnUrl;
    })
  }

  goBack(){

     console.log(this.returnUrl)
      //通过js返回
      // this.nav.back();    //返回上一级   不建议使用
    if(this.returnUrl=='tab2'){
      this.nav.navigateBack('/tabs/tab2');
    }else{

      this.nav.navigateBack('/tabs/tab1');
    }


  }


}

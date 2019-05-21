import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  public list:any={};

  public hasData=false;

  constructor(public activatedRoute:ActivatedRoute,public commonService:CommonService) { }

  ngOnInit() {

    //获取get传值
    this.activatedRoute.queryParams.subscribe((result)=>{
      
      // console.log(result);
      //去服务器请求数据
      this.requestData(result.aid);
    
    })
  }

  requestData(aid){

    var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;

    this.commonService.ajaxGet(api).then((response:any)=>{

        console.log(response);
        
        this.list=response.result[0];

        this.hasData=true;
    })

  }

}

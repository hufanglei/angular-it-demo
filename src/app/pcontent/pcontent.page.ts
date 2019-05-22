import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common.service';
//获取get传值
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.page.html',
  styleUrls: ['./pcontent.page.scss'],
})
export class PcontentPage implements OnInit {


  public tab:any="list";
  public list:any={};
  public config:any={};

  constructor(public common:CommonService,public activatedRoute:ActivatedRoute) { 

    this.config=this.common.config;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data:any)=>{        
      //  console.log(data);

       this.getProductData(data.id);
    })
  }

  getProductData(id){

    var api='api/pcontent?id='+id;
    this.common.ajaxGet(api).then((response:any)=>{
      console.log(response);    

      this.list=response.result;
    })

  }

}

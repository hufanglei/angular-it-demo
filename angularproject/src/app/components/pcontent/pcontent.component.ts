import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.scss']
})
export class PcontentComponent implements OnInit {

  public domain:string='';

  public list:any[]=[];

  constructor(public route:ActivatedRoute,public common:CommonService) {

    this.domain=this.common.domain;

   }

  ngOnInit() {


    this.route.params.subscribe((value:any)=>{
   
      this.requestContent(value.id)
      
    })
  }

  requestContent(id){

    //请求数据  http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955


    var api='api/productcontent?id='+id;

    this.common.get(api).then((response:any)=>{
      console.log(response.result[0]);

      this.list=response.result[0];

    })

  }

}

import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list:any[]=[];

  public domain:string='';

  constructor(public common:CommonService) {


    this.domain=this.common.domain;
   }

  ngOnInit() {


    var api='api/productlist';
    this.common.get(api).then((response:any)=>{
      console.log(response);
      this.list=response.result;
    })
  }





}

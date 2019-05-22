import { Component } from '@angular/core';


import { NavController } from '@ionic/angular';


import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  public config:any={}

  public lCateList:any[]=[];

  public selectedId:any='';  /*选中的id*/


  public rCateList:any[]=[];

  constructor(public navController:NavController,public common:CommonService){

    this.config=this.common.config;
  }

  ngOnInit(): void {
    this.getLeftCateData();
  }

  //跳转到搜索
  goSearch(){

    this.navController.navigateForward('/search');
  }


  //左侧分类
  getLeftCateData(){

    var api="api/pcate"
    this.common.ajaxGet(api).then((response:any)=>{
        this.lCateList=response.result;

        this.getRightCateData(this.lCateList[0]._id);
    })

  }

  //右侧分类

  getRightCateData(pid){    
    //http://jd.itying.com/api/pcate?pid=59f1e1ada1da8b15d42234
    this.selectedId=pid;
    var api="api/pcate?pid="+pid;
    this.common.ajaxGet(api).then((response:any)=>{
        this.rCateList=response.result;
    })    
  }
}

import { Component,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';


import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('slide1') slide1;
  

  //配置文件
  public config:any={};

  //轮播图的属性
  public slidesOpts={
    speed:400,
    autoplay: {
      delay: 2000,
    },
    loop:true
  }


  //轮播图列表
  public focusList:any[]=[];

  //热门商品
  public hotList:any[]=[];

  public hotListWidth:any=400;


  //商品列表

  public pList:any[]=[];


  //构造函数只做初始化的操作
  constructor(public navController:NavController,public common:CommonService){

    this.config=this.common.config;
    
  }

  //初始化的生命周期函数
  ngOnInit(): void {
    this.getFocusData();

    this.getHotData();

    this.getProductList();
  }

  //手动滑动完成
  slideTouchEnd(){

      this.slide1.startAutoplay();
  }

  //跳转到搜索页面
  goSearch(){

      this.navController.navigateForward('/search');

  }
  //获取轮播图的数据
  getFocusData(){

    var api="api/focus";
    this.common.ajaxGet(api).then((response:any)=>{
      console.log(response);
      this.focusList=response.result;
    })

  }
  //获取热门商品

  getHotData(){ 
    for(var i=1;i<=7;i++){
      this.hotList.push({
        pic:'assets/0'+i+'.jpg',
        title:'第'+i+'个',
      })
    }
    //计算hotListWidth的宽度
    this.hotListWidth=this.hotList.length*9+'rem';
  }


  //获取商品列表
  getProductList(){
    //商品列表
    for(var i=1;i<=12;i++){
      this.pList.push({
        pic:'assets/list'+i+'.jpg',
        title:'第'+i+'个',
      })
    }
  }
}

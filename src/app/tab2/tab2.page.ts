import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {



  public lCateList:any[]=[];


  public rCateList:any[]=[];

  constructor(){

    //左侧模拟数据
    for(let i=0;i<16;i++){
      
      this.lCateList.push(`分类${i}`);
    }

    //右侧数据
    for(var i=1;i<=12;i++){
      this.rCateList.push({
        pic:'assets/list'+i+'.jpg',
        title:'第'+i+'个',
      })
    }

  }
}

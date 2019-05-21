import { Component } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list:any[]=[];
  constructor(){

      for(var i=0;i<16;i++){

        this.list.push(`这是第${i}条数据`);
      }
  }
  loadData(event){

    setTimeout(()=>{  

      for(var i=0;i<10;i++){

        this.list.push(`这是第${i}条数据--服务器获取`);
      };

      event.target.complete();   //告诉ion-infinite-scroll数据已经更新完成 


      //禁用ion-infinite-scroll
      if(this.list.length>40){
        event.target.disabled=true;
      }

    },1000);

  }
}

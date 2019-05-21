import { Component ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  //获取 ion-infinite-scroll 这个对象

 @ViewChild('infinite') myInfinite;

  list:any[]=[];
  constructor(){

      for(var i=0;i<16;i++){

        this.list.push(`这是第${i}条数据----`);
      }
  }
  loadMore(event){

    setTimeout(()=>{  

      for(var i=0;i<10;i++){

        this.list.push(`这是第${i}条数据--服务器获取---`);
      };

      event.target.complete();   //告诉ion-infinite-scroll数据已经更新完成 

      //禁用ion-infinite-scroll
      if(this.list.length>100){
        // event.target.disabled=true;

        this.myInfinite.disabled=true;
      }

    },1000);
  }


  doStop(){

    this.myInfinite.disabled=true;
  }

}

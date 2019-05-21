import { Component } from '@angular/core';


import { HttpserviceService } from '../services/httpservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public list:any[]=[];

  public page:any=1;

  public hasMore=true;

  constructor(public httpService:HttpserviceService){

  } 
  ngOnInit(): void {
    
      this.getData();
  }

  getData(){

      var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;
      this.httpService.get(api).then((response:any)=>{
          console.log(response)
          this.list=response.result;
          ++this.page;
      })

  }
  loadMore(e){
    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;
      this.httpService.get(api).then((response:any)=>{
          console.log(response)
          this.list=this.list.concat(response.result);
          ++this.page;
          //判断下一页有没有数据
          if(response.result.length<20){
            e.target.disabled=true;

            this.hasMore=false;
          }
          e.target.complete(); //请求完成数据以后告诉ion-infinite-scroll更新数据
      })
  }
}

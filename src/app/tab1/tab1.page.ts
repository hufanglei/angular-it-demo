import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public list:any[]=[];

  public page:any=1;

  public hasData=false;

  constructor(public commonService:CommonService){
      this.loadMore(null);
  }
  
  loadMore(event){
      var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;
      this.commonService.ajaxGet(api).then((response:any)=>{

        // console.log(response);
        
        this.list=this.list.concat(response.result);
        ++this.page;

        //判断数据是否加载完成
        if(response.result.length<20){
          event?event.target.disabled=true:'';
        }

        this.hasData=true;
        event?event.target.complete():'';
      }).catch((err)=>{

          console.log(err);
      })
  }

  
}

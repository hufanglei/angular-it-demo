import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public config:any={
      domain:'http://jd.itying.com/'
  }
  
  constructor(public http:HttpClient) { 

  }
  /*
  api/focus  
  */
  ajaxGet(url){
   
    var api=this.config.domain+url;
    return new Promise((resove,reject)=>{

        this.http.get(api).subscribe((response)=>{
          resove(response);
        },(error)=>{          
          reject(error);
        })
    })    
  }
}

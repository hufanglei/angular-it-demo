import { Injectable } from '@angular/core';


import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  public domain:string='http://a.itying.com/';

  constructor(public http:HttpClient) { 


  }

  /*

    api/productlist 
    
    http://a.itying.com/api/productlist 
  */


  get(api){

    return new Promise((resolve,reject)=>{

        this.http.get(this.domain+api).subscribe((response)=>{

            resolve(response);
        })  

    })

  }

}

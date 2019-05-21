import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http:HttpClient) { }


  //ajax  get方法
  ajaxGet(api){
    return new Promise((resolve,reject)=>{
        this.http.get(api).subscribe((response)=>{
          resolve(response);
        },(err)=>{
          reject(err);    
        })
    })
  }



}

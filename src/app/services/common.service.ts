import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//首先安装md5模块  cnpm install ts-md5 --save

import {Md5} from "ts-md5/dist/md5";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public config: any = {
    domain: 'http://jd.itying.com/'
  }

  constructor(public http: HttpClient) {

  }
  /*
  api/focus  
  */
  ajaxGet(url:String) {

    var api = this.config.domain + url;
    return new Promise((resove, reject) => {

      this.http.get(api).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }

  /*
 api/focus  
 */
  ajaxPost(url:String, json:Object) {
    var api = this.config.domain + url;
    return new Promise((resove, reject) => {
      this.http.post(api, json).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }

  /*
  生成签名
  var json={
    uid:123,
    salt:'afsafdafadf'
  }
  */

  sign(json){


    var tempArr=[];
    for(var attr in json){
      tempArr.push(attr);
    }

    tempArr=tempArr.sort();

    var tempStr='';

    for(var j=0;j<tempArr.length;j++){

      tempStr+=tempArr[j]+json[tempArr[j]]
    }

    // console.log(tempStr);

    return Md5.hashStr(tempStr);


  }
}

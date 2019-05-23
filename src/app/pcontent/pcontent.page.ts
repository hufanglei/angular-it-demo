import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common.service';
//获取get传值
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.page.html',
  styleUrls: ['./pcontent.page.scss'],
})
export class PcontentPage implements OnInit {


  public tab: any = "list";
  public list: any = {};
  public config: any = {};
  public num: any = 1;

  constructor(public common: CommonService, public activatedRoute: ActivatedRoute) {

    this.config = this.common.config;

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      //  console.log(data);

      this.getProductData(data.id);
    })
  }

  getProductData(id) {

    var api = 'api/pcontent?id=' + id;
    this.common.ajaxGet(api).then((response: any) => {
      console.log(response);

      this.list = response.result;
    })

  }


  changeAttr(e) {

    console.log(e.srcElement.nodeName);


    if (e.srcElement.nodeName == 'SPAN') {

      var el = e.srcElement;   //获取当前点击的span DOM节点

      var parent = el.parentNode;//获取当前节点的父亲节点  

      var attrChildren = parent.children; //通父亲节点找到孩子节点    

      for (var i = 0; i < attrChildren.length; i++) {//让所有的子节点去掉 active  class

        attrChildren[i].className = '';

      }

      el.className = "active";    //给当前dom节点加一个active的 class

    }
  }

  //增加数量 

  incNum() {
    this.num += 1;
  }
  // 减少数量
  decNum() {

    if (this.num > 1) {

      this.num -= 1;
    }

  }

  //加入购物车

  addCart() {

    var product_title = this.list['title'];
    var product_id = this.list['_id'];
    var product_pic = this.list['pic'];
    var product_price = this.list['price'];
    var product_count = this.num;  /*商品数量*/

    var product_attrs: any = '';


    var spanActive = document.querySelectorAll('#myAttr .active');

    for (var i = 0; i < spanActive.length; i++) {
      if(i==0){
        product_attrs += spanActive[i].innerHTML;

      }else{
        product_attrs += "　"+spanActive[i].innerHTML;

      }

    }


    var cartJson = {
      product_title,
      product_id,
      product_pic,
      product_price,
      product_count,
      product_attrs

    }
    console.log(cartJson);




  }


}

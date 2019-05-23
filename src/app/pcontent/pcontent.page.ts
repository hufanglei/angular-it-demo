import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common.service';
//获取get传值
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../services/cart.service';

import { StorageService } from '../services/storage.service';

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
  public cartNum:any=0;

  constructor(public common: CommonService, public activatedRoute: ActivatedRoute,public cartService:CartService,public storage:StorageService) {

    this.config = this.common.config;

  }

  ngOnInit() {
    

    //获取底部购物车数量
    var cartList=this.storage.get('cartList');    
    if(cartList){
        this.cartNum=this.cartService.getCartNum(cartList);      

    }
     //获取get传值
    this.activatedRoute.queryParams.subscribe((data: any) => {   
      this.getProductData(data.id);
    })
  }

  getProductData(id) {

    var api = 'api/pcontent?id=' + id;
    this.common.ajaxGet(api).then((response: any) => {
      // console.log(response);

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
    var productJson = {
      product_title,
      product_id,
      product_pic,
      product_price,
      product_count,
      product_attrs
    }
    console.log(productJson);

      /*
       购物车数据格式：
      [
          {

            id:1,
            title:'xxx',
            price:'xxx',
            ...
            num:4
          },

           {

            id:2,
            title:'xxx',
            price:'xxx',
            ...
            num:3
          }
       
        

      ]


      
      1、获取localStorage的cartList数据

      2、判断cartList是否有数据

          有数据：

              1、判断购物车有没有当前数据：

                      有当前数据：

                          1、让购物车中的当前数据数量 等于以前的数量+现在的数量
                          2、重新写入

                      没有当前数据：

                          1、把购物车cartList的数据和当前数据拼接，拼接后重新写入。

          没有数据：

              1、把当前商品数据以及属性数据放在数组中然后写入localStorage
          
      
      */


        var cartList=this.storage.get('cartList');

        console.log(cartList);
        if(cartList && cartList.length>0){

            //判断购物车有没有当前数据

            if(this.cartService.hasData(cartList,productJson)){

                for(var i=0;i<cartList.length;i++){

                    if(cartList[i].product_id==productJson.product_id){

                      
                       cartList[i].product_count+=productJson.product_count;
                    }
                }
            }else{

               cartList.push(productJson);            


            }
            this.storage.set('cartList',cartList);

            

        }else{

            var tempArr:any[]=[];

            tempArr.push(productJson);

            this.storage.set('cartList',tempArr);
        }


        //修改底部购物车数量
        this.cartNum+=productJson.product_count;



    



  }


}

import { Component } from '@angular/core';

import { NavController} from '@ionic/angular';
import { StorageService } from '../services/storage.service';

import { CommonService } from '../services/common.service';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public list: any = [];

  public config: any = {};

  public allPrice: any = 0;

  public isCheckedAll = true;

  public isEdit = false;    //编辑   

  public hasData=false;     //判断购物车是否有数据

  constructor(public storage: StorageService, public common: CommonService, public cartService: CartService,public navController:NavController) {

    this.config = this.common.config;

  }

  //监听checkbox
  checkboxChange() {


    this.isCheckAllFn();
    //获取选中商品的总价
    this.allPrice = this.cartService.getAllPrice(this.list);
  }

  ionViewDidEnter(): void {
    this.getCartsData();

    this.isCheckAllFn();
  }

  getCartsData() {
    var cartList = this.storage.get('cartList');
    if (cartList&& cartList.length>0) {
      this.list = cartList;
      this.hasData=true;
      
    } else {
      this.list = [];

      this.hasData=false;
    }

    //获取选中商品的总价
    this.allPrice = this.cartService.getAllPrice(this.list);
  }


  //减少数量
  decCount(item: any) {

    if (item.product_count > 1) {

      item.product_count--
    }
    //获取选中商品的总价
    this.allPrice = this.cartService.getAllPrice(this.list);
  }
  //增加数量
  incCount(item: any) {
    item.product_count++;
    //获取选中商品的总价
    this.allPrice = this.cartService.getAllPrice(this.list);
  }

  //判断是否全选
  isCheckAllFn() {

    if (this.cartService.getCheckedNum(this.list) == this.list.length) {
      this.isCheckedAll = true;
    } else {
      this.isCheckedAll = false;
    }
  }


  //全选反选

  checkAll() {

    console.log('执行')

    if (this.isCheckedAll) {
      for (var i = 0; i < this.list.length; i++) {

        this.list[i].checked = false;
      }

      this.isCheckedAll = false;

    } else {
      for (var i = 0; i < this.list.length; i++) {

        this.list[i].checked = true;
      }
      this.isCheckedAll = true;
    }

  }

  //删除购物车里面的数据
  doDelete(){

    // 获取未选中的商品
    let noCheckedCartList=[];

    for(var i=0;i<this.list.length;i++){

      if(!this.list[i].checked){
        noCheckedCartList.push(this.list[i]);
        
      }
    }

    // console.log(noCheckedCartList);


    
    this.list=noCheckedCartList;
    this.list.length>0?this.hasData=true:this.hasData=false;
    this.storage.set('cartList',this.list);

  }

  doCheckout(){

    let tempArr=[];

    for(var i=0;i<this.list.length;i++){

      if(this.list[i].checked){
        tempArr.push(this.list[i]);
        
      }
    }

    if(tempArr.length>0){

      this.storage.set('checkoutData',tempArr);

      //this.router.navigate(['/results'], { queryParams: { page: 1 } });
      this.navController.navigateForward(['/checkout'],{
        queryParams: { 
          returnUrl: '/tabs/tab3' 
        }
      });

      
    }else{

      alert('您还没有选择任何要结算的商品')
    }



  }

  //页面将要离开的时候保存购物车数据
  ionViewWillLeave() {

    this.storage.set('cartList', this.list);
   
  }




}

import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public flag=true;

  public productList=[];  //商品列表

  constructor(public navController:NavController) {


    for(var i=1;i<=10;i++){
      this.productList.push({
        pic:'assets/0'+i+'.jpg',
        title:'运动套装女春秋韩版2019新款时尚连帽休闲套装女卫衣女开衫长'+i,
        price:i*22
      })
    }
   }

  ngOnInit() {
  }

  goBack(){
    this.navController.back();
  }

  doSearch(){

    this.flag=false;
  }

}

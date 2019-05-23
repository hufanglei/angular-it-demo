import { Component, OnInit ,ViewChild} from '@angular/core';

import { NavController,IonContent} from '@ionic/angular';
import { CommonService } from '../services/common.service';

//获取get传值
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {


  @ViewChild(IonContent) content:IonContent;

  public productList:any[]=[];  //商品列表数据
  public cid:Number;   //分类id
  public config:any={};  //配置
  public page:any=1;  //分页
  public subHeaderList:any[]=[];  //二级导航列表
  public subHeaderSelected:any=1;   //选中的id
  public sort:any='';     //排序的参数

  constructor(public navController:NavController,public common:CommonService,public activatedRoute:ActivatedRoute) {
      this.config=this.common.config;


      this.subHeaderList=[
        {
          id:1,
          title:"综合",
          fileds:"all",
          sort:-1       //排序     升序：price_1     {price:1}        降序：price_-1   {price:-1}
        },
        {
          id:2,
          title:"销量",
          fileds:'salecount',
          sort:-1
        },
        {
          id:3,
          title:"价格",
          fileds:'price',
          sort:-1
        }
        
      ]

   }

  ngOnInit() {

      //获取get传值
      this.activatedRoute.queryParams.subscribe((data:any)=>{        
        this.cid=data.cid;
        this.getProductList(null);
      
    })
   
  }  

  getProductList(event){

    if(this.sort){
      var api='api/plist?cid='+this.cid+"&page="+this.page+'&sort='+this.sort;
    }else{
      var api='api/plist?cid='+this.cid+"&page="+this.page;
    }
   
    this.common.ajaxGet(api).then((response:any)=>{
      console.log(response);
      this.productList=this.productList.concat(response.result);
      this.page++;
      event?event.target.complete():'';

      //判断是否有数据
      if(response.result.length<10){
        event?event.target.disabled=true:"";
      }

    })
  }
  goBack(){
    this.navController.navigateBack('/tabs/tab2');
  }

  //属性筛选

  subHeaderChange(id){  

    this.subHeaderSelected=id;   //颜色选中

    this.sort=this.subHeaderList[id-1].fileds+'_'+this.subHeaderList[id-1].sort;  //拼接排序字段

    this.page=1;   //重置分页数据

    this.productList=[];   //重置商品数据

    this.subHeaderList[id-1].sort=this.subHeaderList[id-1].sort*-1; //改变排序状态
    
    this.content.scrollToTop(0);//回到顶部
   
    this.getProductList(null); //请求数据    

  }

}

import { Component, OnInit ,ViewChild} from '@angular/core';
import { NavController,IonContent} from '@ionic/angular';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild(IonContent) content:IonContent;

  public flag=true;
  public productList=[];  //商品列表
  public keywords:any='';  //表单输入的关键词
  public page:any=1;
  public config:any={};  //配置
  public hasInfiniteData:any=true;   //是否有上拉的数据

  public subHeaderList:any[]=[];  //二级导航列表
  public subHeaderSelected:any=1;   //选中的id
  public sort:any='';     //排序的参数


  constructor(public navController:NavController,public common:CommonService) {

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
  }

  goBack(){
    this.navController.back();
  }


 //点击搜索按钮执行搜索
  doSearch(){

    this.flag=false;
    this.page=1;   //重置 page：  换关键词要从第一页开始请求
    this.hasInfiniteData=true;    //开启上拉分页
    this.subHeaderSelected=1;  //重置选择的属性
    this.content.scrollToTop(0);   //回到顶部

    var api='api/plist?search='+this.keywords+"&page="+this.page;   
    this.common.ajaxGet(api).then((response:any)=>{     
      this.productList=response.result;        
      this.page++;     
    })

  }

  //上拉分页加载更多
  getProductList(event){

    if(this.sort){
     var api='api/plist?search='+this.keywords+"&page="+this.page+"&sort="+this.sort;         
    }else{
      var api='api/plist?search='+this.keywords+"&page="+this.page;   
    }
    this.common.ajaxGet(api).then((response:any)=>{    
      this.productList=this.productList.concat(response.result);
      this.page++;
      event?event.target.complete():'';
      //判断是否有数据    
      if(response.result.length<10){
         this.hasInfiniteData=false;   //把上拉分页禁用掉
      }

    })
  }

  subHeaderChange(id){

    this.subHeaderSelected=id;   //颜色选中
     
    
    this.sort=this.subHeaderList[id-1].fileds+'_'+this.subHeaderList[id-1].sort;  //拼接排序字段

    this.page=1;   //重置分页数据

    this.productList=[];   //重置商品数据

    this.hasInfiniteData=true;    //开启上拉分页
  
    this.subHeaderList[id-1].sort=this.subHeaderList[id-1].sort*-1; //改变排序状态
    
    this.content.scrollToTop(0);//回到顶部
   
    this.getProductList(null); //请求数据    



  }
}

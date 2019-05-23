import { Component, OnInit ,ViewChild} from '@angular/core';
import { NavController,IonContent,AlertController} from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';



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
  public historyList:any[]=[];  //历史记录


  constructor(public navController:NavController,public common:CommonService,public storage:StorageService,public alertController: AlertController) {

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

    this.getHistory();
  }

  goBack(){
    this.navController.back();
  }

  //点击历史记录 进行搜索
  goSearch(keywords){
    this.keywords=keywords;
    this.doSearch();

  }

 //点击搜索按钮执行搜索
  doSearch(){

    this.saveHistory();  //保存搜索关键词

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

  //保存历史记录

  saveHistory(){

    /*
    1、获取本地存储里面的历史记录数据

    2、判断本地存储的历史记录是否存在

    3、存在：把新的历史记录和以前的历史记录拼接  然后重新保存     （去重）

    4、不存在：直接把新的历史记录保存到本地

    */

    var historyList=this.storage.get('historylist');

    if(historyList){ //存在

        if(historyList.indexOf(this.keywords)==-1){

          historyList.push(this.keywords);
        }

        this.storage.set('historylist', historyList);


    }else{  //不存在
    
      historyList=[];
      historyList.push(this.keywords);
      this.storage.set('historylist', historyList);

    }

  }

  //获取历史记录
  
  getHistory(){

    var historyList=this.storage.get('historylist');
    if(historyList){
      this.historyList=historyList;
    }


  }
  
  //删除历史记录

  async removeHistory(key) {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: '提示！',
      message: '确定要删除吗?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '删除',
          handler: () => {
            // console.log('Confirm 执行删除'+key);


            this.historyList.splice(key,1);

            this.storage.set('historylist', this.historyList);

          }
        }
      ]
    });

    await alert.present();
  }

  
}

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';
import { NavController,AlertController} from '@ionic/angular';

@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.page.html',
  styleUrls: ['./addresslist.page.scss'],
})
export class AddresslistPage implements OnInit {
  public userinfo:any={};
  public list:any[]=[];

  constructor(public common:CommonService,public storage:StorageService,public navController:NavController,public alertController: AlertController) {

    var userinfo=this.storage.get('userinfo');    
    this.userinfo=userinfo;
  }

  ngOnInit() {
    
  }
  ionViewDidEnter(){

    this.getAddressList();
  }


  getAddressList(){

    //签名
    var sign=this.common.sign({
      uid:this.userinfo._id,
      salt:this.userinfo.salt
    })
    var api='api/addressList?uid='+this.userinfo._id+'&sign='+sign;
    this.common.ajaxGet(api).then((data:any)=>{
      console.log(data);
      this.list=data.result;
    })

  }
  //选择默认收货地址
  changeDefaultAddress(address_id){

      var sign=this.common.sign({
        uid:this.userinfo._id,
        id:address_id,
        salt:this.userinfo.salt
      })

      var api='api/changeDefaultAddress'; 

      this.common.ajaxPost(api,{
        uid:this.userinfo._id,
        id:address_id,
        sign:sign
      }).then((data:any)=>{
        if(data.success){
          this.navController.navigateBack('/checkout');
        }else{
          alert(data.message);
        }
      })

  }
  //删除收货地址
  async removeAddress(key,address_id){

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
            console.log('Confirm 执行删除'+key);        
            
            this.doRemoveAddress(key,address_id);

          }
        }
      ]
    });

    await alert.present();
  }

  //请求接口执行删除

  doRemoveAddress(key,address_id){

    var sign=this.common.sign({
      uid:this.userinfo._id,
      salt:this.userinfo.salt,
      id:address_id
    })

    var api="api/deleteAddress";
    this.common.ajaxPost(api,{
      uid:this.userinfo._id,
      sign:sign,
      id:address_id
    }).then((data:any)=>{
      console.log(data)      
      if(data.success){
        this.list.splice(key,1);
      }else{
        alert(data.message);
      }
    })



  }



}

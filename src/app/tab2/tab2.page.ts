import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { RegisterComponent } from './components/register/register.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}
  async showModel(){

    const modal = await this.modalController.create({
      component: RegisterComponent,
      componentProps: { value: 123 }
    });
    await modal.present();

    /*
    register组件页面给当前页面传值

    1、当前页面监听当前模态对话框销毁的事件

      const { data } = await modal.onDidDismiss();
      
      console.log(data)

    2、找到register页面

      //关闭模态对话框

      this.navParams.data.modal.dismiss({

        result:{
          msg:'我是register组件销毁的时候的数据',
          flag:'true'
        }
      });
    
    */
    

    const { data } = await modal.onDidDismiss();
        
    console.log(data)



  }
}

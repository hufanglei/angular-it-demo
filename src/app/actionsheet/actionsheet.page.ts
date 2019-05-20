import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {
  }

  async showAction(){
    const actionSheet = await this.actionSheetController.create({
      header: '我是actionsheet的标题',
      mode:'ios',   /*修改action的平台*/
      buttons: [{
        text: '删除',
        role: 'destructive',
        icon: 'trash',  
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: '分享',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: '收藏',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: '取消',       
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}

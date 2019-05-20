import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-gestures',
  templateUrl: './gestures.page.html',
  styleUrls: ['./gestures.page.scss'],
})
export class GesturesPage implements OnInit {

  constructor(public alertController: AlertController) {}


  ngOnInit() {
  }
  doTap(){

    console.log('tap tap ...')
  }


  async doPress(){
    const alert = await this.alertController.create({

      backdropDismiss:false,
      header: '提示',
      message: '确定要删除吗!',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}

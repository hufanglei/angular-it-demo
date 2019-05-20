import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  constructor(public toastController: ToastController) {}
  ngOnInit() {
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: '登录成功',
      duration: 2000,
      position: 'middle',
      color:'dark',
      cssClass:'mytoast'    /*cssClass必须写在全局*/
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }

}

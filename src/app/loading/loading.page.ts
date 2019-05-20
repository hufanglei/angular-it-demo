import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  constructor(public loadingController: LoadingController) {}

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '加载中...',
      duration: 5000
    });
    await loading.present();


    //事件
    await loading.onDidDismiss();
    // console.log({ role, data });
    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      // spinner: null,
      duration: 5000,   //延迟时间
      message: '请等待...',
      translucent: true,  //半透明的
      cssClass: 'custom-class custom-loading'   //注意自定义样式要写在全局
    });
    return await loading.present();
  }

}

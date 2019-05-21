import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

//login组件

import { LoginComponent } from './components/login/login.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) {}

  ngOnInit() {

  }
  async showModel(){
    const modal = await this.modalController.create({
      component: LoginComponent,
      componentProps: { aid: 123,name:'xxx' }   //传值
    });
     await modal.present();
  }

}

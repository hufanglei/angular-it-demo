import { Component } from '@angular/core';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private menu:MenuController){
  }

  openSlideMenu(){

    //通过js来操作侧边栏
    this.menu.open('end1');  

  }
}

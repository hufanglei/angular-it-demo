import { Component, OnInit } from '@angular/core';

//接收modal页面传过来的值

import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public navParams: NavParams) {


      console.log(this.navParams);

      console.log(this.navParams.data.aid);
  }

  ngOnInit() {}


  doClose(){

    //关闭模态对话框

    this.navParams.data.modal.dismiss();
  }

}

import { Component, OnInit } from '@angular/core';


import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navController:NavController) { }

  ngOnInit() {
  }

  goBack(){
      //登录页面还需要做其他判断   从哪里跳转到登录页面 我们让页面返回到哪里
      
      this.navController.navigateBack('/tabs/tab4');
  }

}

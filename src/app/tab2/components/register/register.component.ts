import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(public navParams: NavParams) {
    // componentProps can also be accessed at construction time using NavParams

      console.log(this.navParams);
  }

  ngOnInit() {}


  doClose(){

    //关闭模态对话框

    this.navParams.data.modal.dismiss({

      result:{
        msg:'我是register组件销毁的时候的数据',
        flag:'true'
      }
    });
  }
}

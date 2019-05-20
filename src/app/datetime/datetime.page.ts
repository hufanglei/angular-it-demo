import { Component, OnInit } from '@angular/core';

//格式化日期的第三方模块
import sd from 'silly-datetime';


@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  day = '2019-02-13'

  public nowDay;


  //自定义option
  public customPickerOptions = {
    buttons: [{
      text: '取消',
      handler: () => console.log('Clicked 取消!')
    }, {
      text: '确认',
      handler: () => {
        console.log('Clicked 确认');
        // return false;       

        console.log(this.nowDay);
      }
    }]
  }


  constructor() {
    //var d=new Date();
    //Thu Feb 14 2019 15:57:43 GMT+0800 (中国标准时间)


    this.nowDay = sd.format(new Date(), 'YYYY-MM-DD');



  }
  ngOnInit() {
  }

  datetimeChange(e) {
    console.log(e.detail.value);

    console.log(this.nowDay);

  }

}

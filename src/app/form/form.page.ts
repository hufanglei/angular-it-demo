import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public peopleInfo:any={
      username:'',  
      age:20,
      flag:true,  
      payType:'1',
      checkBoxList:[
        { val: '吃饭', isChecked: true },
        { val: '睡觉', isChecked: false },
        { val: '敲代码', isChecked: false }
      ],
      cityList:['北京','上海','深圳'],
      city:'深圳'
  }
  constructor() { }

  ngOnInit() {
  }

  getInfo(){

    console.log(this.peopleInfo);

  }

}

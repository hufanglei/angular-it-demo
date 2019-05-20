import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public list:any=[];

  constructor() { }

  ngOnInit() {

    for(var i=0;i<10;i++){

      this.list.push(`我是第${i}条数据`);
    }
  }

}

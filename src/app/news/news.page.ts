import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public list:any=[];

  constructor() { }

  ngOnInit() {

    for(var i=0;i<10;i++){

      this.list.push(`这是第${i}条数据`)
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  public keyword:string;
  public historyList:any[]=[];

  constructor() { }

  ngOnInit() {
    
  }

  doSearch(){

    if(this.historyList.indexOf(this.keyword)==-1){

      this.historyList.push(this.keyword);
    }    
    this.keyword='';    
  }

  deleteHistroy(key){
      alert(key);
      this.historyList.splice(key,1);
  }

}

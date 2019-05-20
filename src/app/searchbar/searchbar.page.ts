import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

  doChange(){

    console.log('1111')
  }

}

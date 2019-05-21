import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsinfo',
  templateUrl: './newsinfo.page.html',
  styleUrls: ['./newsinfo.page.scss'],
})
export class NewsinfoPage implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((data)=>{

        console.log(data)
    })
  }

}

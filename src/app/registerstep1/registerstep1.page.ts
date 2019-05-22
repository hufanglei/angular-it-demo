import { Component, OnInit } from '@angular/core';


import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registerstep1',
  templateUrl: './registerstep1.page.html',
  styleUrls: ['./registerstep1.page.scss'],
})
export class Registerstep1Page implements OnInit {

  constructor(public navController:NavController) { }

  ngOnInit() {
  }

  goRegisterSetp2(){

    this.navController.navigateForward('/registerstep2');

  }
}

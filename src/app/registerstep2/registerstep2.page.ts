import { Component, OnInit } from '@angular/core';


import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registerstep2',
  templateUrl: './registerstep2.page.html',
  styleUrls: ['./registerstep2.page.scss'],
})
export class Registerstep2Page implements OnInit {

  constructor(public navController:NavController) { }

  ngOnInit() {
  }

  goRegisterSetp3(){

    this.navController.navigateForward('/registerstep3');

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Registerstep3Page } from './registerstep3.page';

const routes: Routes = [
  {
    path: '',
    component: Registerstep3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Registerstep3Page]
})
export class Registerstep3PageModule {}

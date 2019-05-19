import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';

const routes: Routes = [
  {
    path:'',component:UserComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'address',component:AddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

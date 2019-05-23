import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public storage:StorageService){

  }
  canActivate() {    

    console.log('canActivate');
    //判断用户是否登录
    var userinfo=this.storage.get('userinfo');
    if(!userinfo || !userinfo.username){ 
      return false;
    }else{
      return true;
    }

  }
  
  
}

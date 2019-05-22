import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public userinfo:any={};

  constructor(public storage:StorageService) {

      //初始化用户信息
      var userinfo=this.storage.get('userinfo');
      if(userinfo && userinfo.username){
        this.userinfo=userinfo;
      }else{
        this.userinfo='';
      }
      

   }

  ngOnInit() {

    


  }

}

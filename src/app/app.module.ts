import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//http相关模块
import { HttpClientModule } from '@angular/common/http';

//引入配置公共服务
import { CommonService } from './services/common.service';
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    mode:'ios',  //配置android ios用统一的样式
    backButtonText:''  //修改默认返回文字
  }), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    StorageService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


//文件：根模块  告诉ionic如何组装应用


//ionic angular的核心文件
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//ionic打包成app以后配置启动画面 以及导航条的服务  （不用管）
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//引入路由配置文件
import { AppRoutingModule } from './app-routing.module';

//引入根组件
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],  //申明组件
  entryComponents: [], //配置不会在模板中使用的组件
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],   //引入的模块 依赖的模块
  providers: [  //配置服务
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

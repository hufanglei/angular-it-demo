## Angular教程

## 一、 创建angualr 组件

```shell
ng g component components/header
```

使用组件

```shell
<app-header></app-header>
```

#### Angular 绑定数据

#### 1.数据文本绑定

{{}}

```
<h1>
{{title}}
</h1>
```

#### 2. 绑定html

```html
this.h="<h2>这是一个h2 用[innerHTML]来解析</h2>"
```

```
<div [innerHTML]="h"></div>
```

#### 3.绑定属性

```
<div [id]="id" [title]="msg">调试工具看看我的属性</div>
```

### ![1558146654256](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558146654256.png)

#### 4. 数据循环*ngFor

##### 1）*ngFor 普通循环

```
<ul>
<li *ngFor="let item of list">
{{item}}
</li>
</ul>
```

##### 2）循环的时候设置key

```
<ul>
<li *ngFor="let item of list;let i = index;">
{{item}} --{{i}}
</li>
</ul>
```

##### 3）template 循环数据

```
<ul>
<li template="ngFor let item of list">
{{item}}
</li>
</ul>
```

#### 5.条件判断*ngIf.....

```
<p *ngIf="list.length > 3">这是ngIF 判断是否显示</p>
```

```
<p template="ngIf list.length > 3">这是ngIF 判断是否显示</p>
```



#### 6.*ngSwitch....

```
<ul [ngSwitch]="score">
<li *ngSwitchCase="1">已支付</li>
<li *ngSwitchCase="2">订单已经确认</li>
<li *ngSwitchCase="3">已发货</li>
<li *ngSwitchDefault
```

#### 7.执行事件(click)=”getData()”..

```
<button class="button" (click)="getData()">
点击按钮触发事件
</button>
<button class="button" (click)="setData()">
点击按钮设置数
```

```
getData(){ /*自定义方法获取数据*/
//获取
alert(this.msg);
}
setData(){
//设置值
this.msg='这是设置的值';
}
```

#### 8.表单事件...

```
<input type="text" (keyup)="keyUpFn($event)"/>
```

```
<input type="text" (keyup)="keyUpFn($event)"/>
```

```
keyUpFn(e){
   console.log(e)
}
```

#### 9.双向数据绑定......

```
<input [(ngModel)]="inputValue">
```

注意引入：在app.module.ts中引入FormsModule

```typescript
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent
],
imports: [
    BrowserModule,
    FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
```

使用：

```
<input type="text" [(ngModel)]="inputValue"/>
{{inputValue}}
```

#### 10.[ngClass]、[ngStyle]........

[ngClass]:

```typescript
public flag=false;
public arr = [1, 3, 4, 5, 6];
```

```
<div [ngClass]="{'red': true, 'blue': false}">
	这是一个div
</div>
<div [ngClass]="{'red': flag, 'blue': !flag}">
	这是一个div
</div>
<ul>
    <li *ngFor="let item of arr, let i = index">
        <span [ngClass]="{'red': i==0}">{{item}}</span>
    </li>
</ul>
```

[ngStyle]:

```typescript
public attr='red';
```

```html
<div [ngStyle]="{'background-color':'green'}">你好ngStyle</div>

<div [ngStyle]="{'background-color':attr}">你好ngStyle</div>
```

#### 11.管道.

```typescript
public today=new Date();
```

```
<p>{{today | date:'yyyy-MM-dd HH:mm:ss' }}</p>
```

大小写转换

```
<p>{{str | uppercase}}</p>//转换成大写
<p>{{str | lowercase}}</p>//转换成小写
```

日期格式转换

```
<p>{{today | date:'yyyy-MM-dd HH:mm:ss' }}</p> 
```

小数位数

```
<p>{{p | number:'1.2-4'}}</p>  JavaScript 对象序列化
```

 JavaScript 对象序列化

```
<p>{{ { name: 'semlinker' } | json }}</p> <!-- Output: { "name": "semlinker" } -->
```

slice

```
<p>{{ 'semlinker' | slice:0:3 | uppercase }}</p> <!-- Output: SEM -->
```

7. 自定义管道

   自定义管道的步骤：

   使用 [@Pipe](http://bbs.itying.com/user/Pipe) 装饰器定义 Pipe 的 metadata 信息，如 Pipe 的名称 - 即 name 属性

   实现 PipeTransform 接口中定义的 transform 方法

   1.1 WelcomePipe 定义

   ```typescript
   import { Pipe, PipeTransform } from '@angular/core';
   [@Pipe](/user/Pipe)({ name: 'welcome' })
   export class WelcomePipe implements PipeTransform {
     transform(value: string): string {
       if(!value) return value;
       if(typeof value !== 'string') {
         throw new Error('Invalid pipe argument for WelcomePipe');
       }
       return "Welcome to " + value;
     }
   } 
   ```

   WelcomePipe 使用

   ```
   <div>
      <p ngNonBindable>{{ 'semlinker' | welcome }}</p>
      <p>{{ 'semlinker' | welcome }}</p> <!-- Output: Welcome to semlinker -->
   </div>
   ```

   RepeatPipe 定义

   ```typescript
   import {Pipe, PipeTransform} from '@angular/core';
   [@Pipe](/user/Pipe)({name: 'repeat'})
   export class RepeatPipe implements PipeTransform {
       transform(value: any, times: number) {
           return value.repeat(times);
       }
   }
   ```

   RepeatPipe 使用

   ```
   <div>
      <p ngNonBindable>{{ 'lo' | repeat:3 }}</p>
      <p>{{ 'lo' | repeat:3 }}</p> <!-- Output: lololo -->
   </div>
   ```



## 二、创建angular服务

### 1.创建服务命令

```powershell
ng g service my-new-service
创建到指定目录下面
ng g service services/storage

```

### 2.app.module.ts 里面引入创建的服务

```typescript
import { StorageService } from './services/storage.service';
```

### 3.NgModule 里面的providers 里面依赖注入服务

```typescript
@NgModule({
declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    TodolistComponent
],
imports: [
	BrowserModule,
	FormsModule
],
providers: 
    [StorageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

### 4.使用的页面引入服务，注册服务

```typescript
import { StorageService } from '../../services/storage.service';
constructor(private storage: StorageService) {
}
使用
addData(){
    // alert(this.username);
    this.list.push(this.username);
    this.storage.set('todolist',this.list);
}
removerData(key){
    console.log(key);
    this.list.splice(key,1);
    this.storage.set('todolist',this.list);
}
```

## 案例todo-list搜索缓存数据功能

![1558165215295](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558165215295.png)

git代码地址:

<https://github.com/hufanglei/angular-it-demo>  

## 三、Dom 操作

<https://github.com/hufanglei/angular-it-demo/tree/02>

### 1.Angular 中的dom 操作（原生js）

```typescript
ngAfterViewInit(){
	var boxDom:any=document.getElementById('box');
	boxDom.style.color='red';
}
```

### 2.Angular 中的dom 操作（ViewChild）

```HTML
<div #myattr></div>
```

```typescript
import { Component ,ViewChild,ElementRef} from '@angular/core';
@ViewChild('myattr') myattr: ElementRef;
ngAfterViewInit(){
	let attrEl = this.myattr.nativeElement;
}
```

### 3.父子组件中通过ViewChild 调用子组件的方法

调用子组件给子组件定义一个名称

```html
<app-footer #footerChild></app-footer>
```

import引入ViewChild

```typescript
import { Component, OnInit ,ViewChild} from '@angular/core';
```

ViewChild 和刚才的子组件关联起来

```typescript
@ViewChild('footerChild') footer;
```

4.调用子组件

```typescript
run(){
	this.footer.footerRun();
}
```

## 四、执行css3 动画

### 1.创建transition子组件

transition.component.html

```
<div class="content">
  内容区域
  <button (click)="showAside()">弹出侧边栏</button>
  <button (click)="hideAside()">隐藏侧边栏</button>
</div>

<aside id="aside">
  这是一个侧边栏
</aside>

```

transition.component.ts

```typescript
export class TransitionComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  showAside(){
     //原生js获取dom节点
     var asideDom:any=document.getElementById('aside');
     asideDom.style.transform="translate(0,0)";
  }
 hideAside(){
    //原生js获取dom节点
    var asideDom:any=document.getElementById('aside');
    asideDom.style.transform="translate(100%,0)";
 }
}

```

transition.component.scss

```css
#aside{
      width: 200px;
      height: 100%;
      position: absolute;
      right: 0px;
      top:0px;
      background: #000;
      color:#fff;
      transform: translate(100%,0);
      transition: all 2s;
}
```

### 2.引入transation模块

app.component.html

```
<app-transition></app-transition>
```



## 五、父子组件以及组件之间通讯

### 1.父组件给子组件传值-@input

父组件不仅可以给子组件传递简单的数据，还可把自己的方法以及整个父组件传给子组件

#### ①父组件调用子组件的时候传入数据

```
<app-header [msg]="msg"></app-header>
```

#### ②子组件引入Input 模块

```typescript
import { Component, OnInit ,Input } from '@angular/core';
```

#### ③子组件中@Input 接收父组件传过来的数据

```typescript
export class HeaderComponent implements OnInit {
	@Input() msg:string
    constructor() { }
    ngOnInit() {
    }
}
```

#### ④子组件中使用父组件的数据

```
<h2>这是头部组件--{{msg}}</h2>
```

#### 案例:

##### 1.父组件分别把自己的属性和方法传递给子组件

父组件

![1558167805476](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558167805476.png)

![1558167840309](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558167840309.png)

子组件

#### ![1558167906687](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558167906687.png)

##### 2.父组件把自己整个组件传递给子组件

父组件

##### ![1558168217754](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558168217754.png)

子组件

![1558168293221](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558168293221.png)

### 2.子组件通过@Output 触发父组件的方法

#### ①子组件引入Output 和EventEmitter

```typescript
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
```

#### ②子组件中实例化EventEmitter

```typescript
@Output() private outer=new EventEmitter<string>();
/*用EventEmitter 和output 装饰器配合使用<string>指定类型变量*/
```

#### ③子组件通过EventEmitter 对象outer 实例广播数据

```typescript
sendParent(){
	// alert('zhixing');
	this.outer.emit('msg from child')
}
```

#### ④父组件调用子组件的时候，定义接收事件, outer 就是子组件的EventEmitter 对象outer

```
<app-header (outer)="runParent($event)"></app-header>
```

#### ⑤父组件接收到数据会调用自己的runParent 方法，这个时候就能拿到子组件的数据

```typescript
//接收子组件传递过来的数据
runParent(msg:string){
	alert(msg);
}
```

### 3、父组件通过@ViewChild 主动获取子组件的数据和方法

#### ①调用子组件给子组件定义一个名称

```
<app-footer #footerChild></app-footer>
```

#### ②引入ViewChild

```typescript
import { Component, OnInit ,ViewChild} from '@angular/core';
```

#### ③ViewChild 和刚才的子组件关联起来

```typescript
@ViewChild('footerChild') footer;
```

#### ④调用子组件

```typescript
run(){
	this.footer.footerRun();
}
```

### 4.总结

![1558170962956](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558170962956.png)

## 六、Angular 中的生命周期函数

官方文档：https://www.angular.cn/guide/lifecycle-hooks

生命周期函数通俗的讲就是组件创建、组件更新、组件销毁的时候会触发的一系列的方法。

当Angular 使用构造函数新建一个组件或指令后，就会按下面的顺序在特定时刻调用这些生命周期钩子方法。

| 钩子                      | 用途及时机                                                   |
| ------------------------- | ------------------------------------------------------------ |
| `ngOnChanges()`           | 当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 `SimpleChanges` 对象在 `ngOnInit()` 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。 |
| `ngOnInit()`              | 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。在第一轮 `ngOnChanges()` 完成之后调用，只调用**一次**。 |
| `ngDoCheck()`             | 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。在每个变更检测周期中，紧跟在 `ngOnChanges()` 和 `ngOnInit()` 后面调用。 |
| `ngAfterContentInit()`    | 当 Angular 把外部内容投影进组件/指令的视图之后调用。第一次 `ngDoCheck()` 之后调用，只调用一次。 |
| `ngAfterContentChecked()` | 每当 Angular 完成被投影组件内容的变更检测之后调用。`ngAfterContentInit()` 和每次 `ngDoCheck()` 之后调用 |
| `ngAfterViewInit()`       | 当 Angular 初始化完组件视图及其子视图之后调用。第一次 `ngAfterContentChecked()` 之后调用，只调用一次。 |
| `ngAfterViewChecked()`    | 每当 Angular 做完组件视图和子视图的变更检测之后调用。`ngAfterViewInit()` 和每次 `ngAfterContentChecked()` 之后调用。 |
| `ngOnDestroy()`           | 每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。在 Angular 销毁指令/组件之前调用。 |

案例:

![1558172106767](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558172106767.png)



## 七、Rxjs 异步数据流编

参考手册：https://www.npmjs.com/package/rxjs
中文手册：https://cn.rx.js.org/
RxJS 是ReactiveX 编程理念的JavaScript 版本。ReactiveX 来自微软，它是一种针对异步数据
流的编程。简单来说，它将一切数据，包括HTTP 请求，DOM 事件或者普通数据等包装成流
的形式，然后用强大丰富的操作符对流进行处理，使你能以同步编程的方式处理异步数据，
并组合不同的操作符来轻松优雅的实现你所需要的功能。
RxJS 是一种针对异步数据流编程工具，或者叫响应式扩展编程；可不管如何解释RxJS 其目
标就是异步编程，Angular 引入RxJS 为了就是让异步可控、更简单。
RxJS 里面提供了很多模块。这里我们主要给大家讲RxJS 里面最常用的Observable 和
fromEvent。

**目前常见的异步编程的几种方法：**

1）、回调函数
2）、事件监听/发布订阅
3）、Promise
4）、Rxjs

### 1.Promise 和RxJS 处理异步对比

Promise 处理异步:

```javascript
let promise = new Promise(resolve => {
    setTimeout(() => {
    resolve('---promise timeout---');
    }, 2000);
});
promise.then(value => console.log(value));
```

RxJS 处理异步：

```javascript
import {Observable} from 'rxjs';
let stream = new Observable(observer => {
    setTimeout(() => {
    	observer.next('observable timeout');
    }, 2000);
});
stream.subscribe(value => console.log(value));
```

从上面列子可以看到RxJS 和Promise 的基本用法非常类似，除了一些关键词不同。Promise里面用的是then() 和resolve()，而RxJS 里面用的是next() 和subscribe()。

Promise 和RxJS 的用法基本相似。其实Rxjs 相比Promise 要强大很多。比如Rxjs 中可以中途撤回、Rxjs 可以发射多个值、Rxjs 提供了多种工具函数等等。

### 2.Rxjs 订阅后多次执行

如果我们想让异步里面的方法多次执行，比如下面代码。

这一点Promise 是做不到的，对于Promise 来说，最终结果要么resole（兑现）、要么reject（拒绝），而且都只能触发一次。如果在同一个Promise 对象上多次调用resolve 方法，则会抛异常。而Observable 不一样，它可以不断地触发下一个值，就像next() 这个方法的名字所暗示的那样。

```typescript
let promise = new Promise(resolve => {
    setInterval(() => {
        resolve('---promise setInterval---');
    }, 2000);
});
promise.then(value => console.log(value));
```

Rxjs

```typescript
let stream = new Observable<number>(observer => {
let count = 0;
setInterval(() => {
   	 observer.next(count++);
    }, 1000);
});
stream.subscribe(value => console.log("Observable>"+value));
```

### 3.Angualr6.x 之前使用Rxjs 的工具函数map filter

注意：Angular6 以后使用以前的rxjs 方法，必须安装rxjs-compat 模块才可以使用map、filter方法。

angular6 后官方使用的是RXJS6 的新特性，所以官方给出了一个可以暂时延缓我们不需要修改rsjx 代码的办法。

```typescript
npm install rxjs-compat
```

```typescript
import {Observable} from 'rxjs';
import 'rxjs/Rx';
let stream= new Observable<any>(observer => {
    let count = 0;
    setInterval(() => {
        observer.next(count++);
        }, 1000);
});
stream.filter(val=>val%2==0)
.subscribe(value => console.log("filter>"+value));

stream
.map(value => {
return value * value
})
.subscribe(value => console.log("map>"+value));
```

### 4.Angualr6.x 以后Rxjs6.x 的变化以及使用

Rxjs 的变化参考文档：http://bbs.itying.com/topic/5bfce189b110d80f905ae545

```
import {Observable} from 'rxjs';
import {map,filter} from 'rxjs/operators';
```

```typescript
let stream= new Observable<any>(observer => {
	let count = 0;
    setInterval(() => {
        observer.next(count++);
    }, 1000);
});
stream.pipe(
	filter(val=>val%2==0)
)
.subscribe(value => console.log("filter>"+value));

stream.pipe(
    filter(val=>val%2==0),
    map(value => {
    	return value * value
    })
)
.subscribe(value => console.log("map>"+value));
```

### 5.Rxjs 延迟执行

dom转换成dom流，然后对整个dom流进行处理

```typescript
import {Observable,fromEvent} from 'rxjs';
import {map,filter,throttleTime} from 'rxjs/operators';
var button = document.querySelector('button');
	fromEvent(button, 'click').pipe(
	throttleTime(1000)
)
.subscribe(() => console.log(`Clicked`));
```

## 八、Angular 中的数据交互（get jsonp post）

### 1.Angular get 请求数据

Angular5.x 以后get、post 和和服务器交互使用的是HttpClientModule 模块。

1、在app.module.ts 中引入HttpClientModule 并注入

```typescript
import {HttpClientModule} from '@angular/common/http';
```

```typescript
imports: [
	BrowserModule,
	HttpClientModule
]
```

2.  在用到的地方引入HttpClient 并在构造函数声明

```typescript
import {HttpClient} from "@angular/common/http";
```

```typescript
constructor(public http:HttpClient) { }
```

3、get 请求数据

```typescript
var api = "http://a.itying.com/api/productlist";
this.http.get(api).subscribe(response => {
	console.log(response);
});
```

### 2.Angular post 提交数据

Angular5.x 以后get、post 和和服务器交互使用的是HttpClientModule 模块。

1、在app.module.ts 中引入HttpClientModule 并注入

```typescript
import {HttpClientModule} from '@angular/common/http';
```

```typescript
imports: [
	BrowserModule,
	HttpClientModule
]
```

2、在用到的地方引入HttpClient、HttpHeaders 并在构造函数声明HttpClient

```
import {HttpClient,HttpHeaders} from "@angular/common/http";
```

```typescript
constructor(public http:HttpClient) { }
```

3、post 提交数据

```typescript
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var api = "http://127.0.0.1:3000/doLogin";
this.http.post(api,{username:'张三',age:'20'},httpOptions).subscribe(response => {
	console.log(response);
});
```

### 3.Angular Jsonp 请求数据

1、在app.module.ts 中引入HttpClientModule、HttpClientJsonpModule 并注入

```typescript
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
```

```typescript
imports: [
	BrowserModule,
	HttpClientModule,
	HttpClientJsonpModule
]
```

2、在用到的地方引入HttpClient 并在构造函数声明import

```
import {HttpClient} from "@angular/common/http";
```

```typescript
constructor(public http:HttpClient) { }
```

3、jsonp 请求数据

```typescript
var api = "http://a.itying.com/api/productlist";
this.http.jsonp(api,'callback').subscribe(response => {
	console.log(response);
});
```

### 4.Angular 中使用第三方模块axios 请求数据

整个是vue或者reatjs常用的请求方式，angular也可以使用

1、安装axios

```
cnpm install axios --save
```

2、用到的地方引入axios

```
import axios from 'axios';
```

3、看文档使用

```typescript
axios.get('/user?ID=12345')
.then(function (response) {
	// handle success
	console.log(response);
})
.catch(function (error) {
	// handle error
	console.log(error);
})
.then(function () {
	// always executed
});
```

## 九、Angular 中的路由

### 1、Angular 创建一个默认带路由的项目

#### ①命令创建项目

```
ng new angualrdemo08 --skip-install
```

#### ②创建需要的组件

```
ng g component home
ng g component news
ng g component newscontent
```

#### ③找到app-routing.module.ts 配置路由

引入组件

```typescript
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
```

配置路由

```typescript
const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'news', component: NewsComponent},
	{path: 'newscontent/:id', component: NewscontentComponent},
	{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
	}
];
```

#### ④找到app.component.html 根组件模板，配置router-outlet 显示动态加载的路由

```html
<h1>
	<a routerLink="/home">首页</a>
	<a routerLink="/news">新闻</a>
</h1>
<router-outlet></router-outlet>
```

传值

![1558227586388](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558227586388.png)

### 2.Angular routerLink 跳转页面默认路由

```html
<h1>
	<a routerLink="/home">首页</a>
	<a routerLink="/news">新闻</a>
</h1>
<router-outlet></router-outlet>
```

```typescript
//匹配不到路由的时候加载的组件或者跳转的路由
{
	path: '**', /*任意的路由*/
	// component:HomeComponent
	redirectTo:'home'
}
```

### 3.Angular routerLinkActive 设置routerLink 默认选中路由

```html
<h1>
	<a routerLink="/home" routerLinkActive="active">首页</a>
	<a routerLink="/news" routerLinkActive="active">新闻</a>
</h1>
```

```html
<h1>
	<a [routerLink]="[ '/home' ]" routerLinkActive="active">首页</a>
	<a [routerLink]="[ '/news' ]" routerLinkActive="active">新闻</a>
</h1>
```

```css
.active{
	color:red;
}
```

### 4.动态路由

#### ①配置动态路由

```typescript
const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'news', component: NewsComponent},
	{path: 'newscontent/:id', component: NewscontentComponent},
{
	path: '',
	redirectTo: '/home',
	pathMatch: 'full'
}
];
```

#### ②跳转传值

```html
<a [routerLink]="[ '/newscontent/',aid]">跳转到详情</a>
<a routerLink="/newscontent/{{aid}}">跳转到详情</a>
```

#### ③获取动态路由的值

```typescript
import { ActivatedRoute} from '@angular/router';
```

```typescript
constructor( private route: ActivatedRoute) {
}
```

```typescript
ngOnInit() {
	console.log(this.route.params);
	this.route.params.subscribe(data=>this.id=data.id);
}	
```



### 5.总结：get路由和动态路由

get传值

  1、跳转

```html

```

  2、接收

```typescript

```

动态路由

 1、配置动态路由

```typescript
  {

        path:'newscontent/:aid',component:NewscontentComponent
  }
```

2、跳转

```HTML
 <ul>
        <li *ngFor="let item of list;let key=index;">
          <a [routerLink]="[ '/newscontent/', key ]">{{key}}---{{item}}</a>
        </li>
 </ul>
```

 3、接收

```typescript
import { ActivatedRoute } from '@angular/router';
constructor(public route:ActivatedRoute) { }
this.route.params.subscribe((data)=>{
      console.log(data);
})
```

### 6.动态路由的js 跳转

#### ①引入

```typescript
import { Router } from '@angular/router';
```

②初的始化

```typescript
export class HomeComponent implements OnInit {
constructor(private router: Router) {
}
ngOnInit() {
}
goNews(){
	// this.router.navigate(['/news', hero.id]);
	this.router.navigate(['/news']);
}
}
```

#### ③路由跳转

```typescript
this.router.navigate(['/news', hero.id]);
```

### 7.路由get 传值js 跳转

#### ①引入NavigationExtras

```typescript
import { Router ,NavigationExtras} from '@angular/router';
```

#### ②定义一个goNewsContent 方法执行跳转，用NavigationExtras 配置传参

```typescript
goNewsContent(){
	let navigationExtras: NavigationExtras = {
		queryParams: { 'session_id': '123' },
		fragment: 'anchor'
	};
	this.router.navigate(['/news'],navigationExtras);
}
```

#### ③获取get 的传值

```typescript
constructor(private route: ActivatedRoute) {
	console.log(this.route.queryParams);
}
```



### 8.js跳转路由总结

1)、动态路由

 ①、引入声明模块

```typescript
import { Router} from '@angular/router';
constructor(public router:Router) { }
```

 ②跳转

```
this.router.navigate(['/home']);
this.router.navigate(['/newscontent/','1243']);
```

2)、get传值

 ①引入声明模块

```
 import { Router} from '@angular/router';
 constructor(public router:Router) { }
```

②跳转

```
this.router.navigate(['/news'],{
          queryParams:{
            aid:123
          }
 });
```

### 9.父子路由

#### ①创建组件引入组件

```typescript
import { NewsaddComponent } from './components/newsadd/newsadd.component';
import { NewslistComponent } from './components/newslist/newslist.component';
```

#### ② 配置路由

```typescript
{
	path: 'news',
	component:NewsComponent,
    children: [
        {
        path:'newslist',
        component:NewslistComponent
        },
        {
        path:'newsadd',
        component:NewsaddComponent
        }
	]
}
```

#### ③父组件中定义router-outlet

```
<router-outlet></router-outlet>
```

## 十.Angular 无人点餐无人收银系统【基础案例】

效果图

![1558235343529](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558235343529.png)





代码地址:

<https://github.com/hufanglei/angular-it-demo/tree/03>

## 

##  十一、Angular 中自定义模块

### 1.Angular 内置模块

![1558236563207](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558236563207.png)

### 2.Angular 自定义模块

当我们项目比较小的时候可以不用自定义模块。但是当我们项目非常庞大的时候把所有的组
件都挂载到根模块里面不是特别合适。所以这个时候我们就可以自定义模块来组织我们的项
目。并且通过Angular 自定义模块可以实现路由的懒加载。



![1558236600126](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558236600126.png)

案例:

![1558236677329](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1558236677329.png)

创建模块

```
ng g module module/user --routing
ng g module module/article --routing
ng g module module/product --routing
```

创建组件：

```
ng g module module/user --routing
ng g component module/user/components/profile
ng g component module/user/components/order
ng g component module/article
ng g component module/article/components/articlelist
ng g component module/article/components/info
ng g component module/product
ng g component module/product/components/plist
ng g component module/product/components/pinfo
```

配置懒加载:

```typescript
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
{
	path:'',component : HomeComponent
},
{
	path:'user',loadChildren : './usermodule/usermodule.module#UsermoduleModule'
}
];
```

源码地址:

<https://github.com/hufanglei/angular-it-demo/tree/04>






























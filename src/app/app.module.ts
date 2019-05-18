import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//引入表单相关的模块 才可以用双休数据绑定
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

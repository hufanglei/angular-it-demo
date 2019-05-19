import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {

    path:'user',loadChildren:'./module/user/user.module#UserModule'
  },
  {

    path:'article',loadChildren:'./module/article/article.module#ArticleModule'
  },
  {

    path:'product',loadChildren:'./module/product/product.module#ProductModule'
  },

  {

    path:'**',redirectTo:'user'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

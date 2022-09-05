import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {ShopDetailComponent} from './shop-detail/shop-detail.component';
import {ShopCartComponent} from './shop-cart/shop-cart.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {ShopGridComponent} from './shop-grid/shop-grid.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'shop-detail', component: ShopDetailComponent
  },
  {
    path: 'shop-cart', component: ShopCartComponent
  },
  {
    path: 'check-out', component: CheckOutComponent
  },
  {
    path: 'shop-grid', component: ShopGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

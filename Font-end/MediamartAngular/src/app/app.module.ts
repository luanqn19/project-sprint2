import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import {APP_BASE_HREF} from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ContractComponent } from './contract/contract.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    ShopDetailComponent,
    ShopCartComponent,
    CheckOutComponent,
    ShopGridComponent,
    ContractComponent,
    BlogComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

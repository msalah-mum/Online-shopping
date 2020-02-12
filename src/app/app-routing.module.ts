import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './admin/products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './admin/orders/orders.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, // need search for "/"
  { path: 'link', component: ShopingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myorders', component: MyOrdersComponent },
  { path: 'admin/orders', component: OrdersComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

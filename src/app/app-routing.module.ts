import { AuthGuardService } from './authguard/auth-guard.service';
import { CheckOutComponent } from './check-out/check-out.component';
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
  { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

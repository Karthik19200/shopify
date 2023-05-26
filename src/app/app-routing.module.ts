import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import{PdetailsComponent}from './component/pdetails/pdetails.component';
import { OrderComponent } from './component/order/order.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';


const routes: Routes = [
{path:'',component: ProductComponent},
{path:'product', component: ProductComponent},
{path:'cart', component: CartComponent},
{path:"pdetails",component:PdetailsComponent},
{path:"order",component:OrderComponent},
{path:"wishlist",component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

} )

export class AppRoutingModule { }

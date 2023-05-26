import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes} from '@angular/router';
import { PdetailsComponent } from './component/pdetails/pdetails.component';
import { OrderComponent } from './component/order/order.component';
import { SecondComponent } from './component/second/second.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { FilterPipe } from './component/shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule}from '@angular/forms';


const route: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'product', component: ProductComponent},
  {path:'cart', component: CartComponent}
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    PdetailsComponent,
    OrderComponent,
    SecondComponent,
    FooterComponent,
    WishlistComponent,
    FilterPipe ,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

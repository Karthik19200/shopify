import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicee/api.service';
import { CartService } from 'src/app/servicee/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  public productList:any;
  public secondproductlist:any;
  searchKey:string="";
  constructor( private api:ApiService , private cartservice : CartService)  {}

ngOnInit(): void {
 this.api.getproduct()
 .subscribe(res=>{
  this.productList =res;
  console.log(this.productList);
  
  this.productList.forEach((a:any) => {
    Object.assign(a,{quantity:1,total:a.price});
  });
 });
 this.api.getsecondapi()
 .subscribe(res=>{
  this.secondproductlist=res;
  console.log(this.secondproductlist);
  
  this.secondproductlist.forEach((a:any) => {
    Object.assign(a,{quantity:1,total:a.price});
  });
 });


 this.cartservice.search.subscribe((val:any)=>{
  this.searchKey = val;
 }) 

}
addtoCart(item:any)
{
this.cartservice.addtoCart(item);
}

wishlist(item:any)
{
  this.cartservice.wishlist(item); 
}

imagee(item:any)
    {
    this.cartservice.imagee(item);
    }


    myfunction()
   {
    const list=document.getElementById("mydiv")?.classList;
    list?.add("mystyle")
   }
}



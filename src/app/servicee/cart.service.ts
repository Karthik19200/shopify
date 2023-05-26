import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public imageitem:any=[]   
  public cartItemList : any=[] // array cart to store products
  public wishlistvar:any=[]
  public search = new BehaviorSubject<string>("");
  public productList = new BehaviorSubject<any>([]);
  public productdetail=new BehaviorSubject<any>([]);
  public wish= new BehaviorSubject<any>([]);

  constructor() { }

  getproductdetails()
  {
    return this.productdetail.asObservable();
  }
 
  getproducts()
  {
   return this.productList.asObservable();
  }
  getwishlist()
  {
    return this.wish.asObservable();
  }

  setproduct( product:any)
  {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:any)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.productList)
    alert("your item has been added to cart list")
  }
    wishlist(product:any)
    {
      this.wishlistvar.push(product);
      this.wish.next(this.wishlistvar);
      alert("your item has been added to  wishlist list")

    }



imagee(item: any)
{
this.imageitem.push(item);
this.productdetail.next(this.imageitem);
console.log(this.imageitem)
}

  getTotalPrice():number
  {
   let grandTotal=0;
   this.cartItemList.map((a:any)=>
  {
   grandTotal += a.total;
  } )
   return grandTotal;
  }

  removeCartItem(product:any)
  {
  this.cartItemList.map((a:any,index:any)=>{
  if(product.id===a.id){
  this.cartItemList.splice(index,1);
  this.productList.next(this.cartItemList);
  }
  })
  }
  removeAllCart()
  {
  this.cartItemList =[]
  this.productList.next( this.cartItemList);
  }
  }

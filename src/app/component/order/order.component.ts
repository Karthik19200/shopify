import { Component } from '@angular/core';
import { CartService } from 'src/app/servicee/cart.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public productd :any=[];
   
  constructor(  private cartservice : CartService)  {}
   
  ngOnInit():void{
    this.cartservice.getproductdetails()
    .subscribe(res =>{
      this.productd=res;
      console.log(this.productd);
     } )
    }
  imagee(item: any)

  {
  return this.cartservice.imageitem(item)
  }

}




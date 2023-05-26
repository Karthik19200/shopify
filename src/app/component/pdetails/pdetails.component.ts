import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/servicee/cart.service';

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})
export class PdetailsComponent implements OnInit {
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
  
  addtoCart(item:any)
  {
  this.cartservice.addtoCart(item);
  }
}

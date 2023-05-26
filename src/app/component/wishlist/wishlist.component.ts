import { Component } from '@angular/core';
import { CartService } from 'src/app/servicee/cart.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})


export class WishlistComponent {

  public wishproduct:any=[];
  public wishcount:number=0;
  constructor( private cartservice : CartService) { }
  ngOnInit(): void {
    this.cartservice.getwishlist()
    .subscribe(res=>{
      this.wishproduct =res;
      

      console.log(this.wishproduct);
      

    })    
  }


}

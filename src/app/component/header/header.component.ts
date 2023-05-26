import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/servicee/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalitem:number=0;
  public wishcount:number=0;
  public searchTerm : string='';
  constructor( private cartservice : CartService ) {}
  ngOnInit(): void {
    this.cartservice.getproducts().subscribe(res=>{  //  returning productlist and storing in res by calling getproduct()
     this.totalitem=res.length;
    })
  
    this.cartservice.getwishlist().subscribe(res=>{
    this.wishcount=res.length;
    })
  }
     search(event:any){
      this.searchTerm = (event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.cartservice.search.next(this.searchTerm);
      
     }
  } 
 
  
  
 


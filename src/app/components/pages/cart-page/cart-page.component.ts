import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:cart
constructor(private cartservice:CartService){
  this.cartservice.getCartObservable().subscribe((cart)=>{
     this.cart = cart
  })
}
ngOnInit(): void {
}

removeFromCart(cartItem:CartItem){
  this.cartservice.removeFromCart(cartItem.food.id )
}

changeQuantity(cartItem:CartItem,quantityInString:string){
   let quantity = parseInt(quantityInString)
   this.cartservice.changeQuantity(cartItem.food.id, quantity)
}

}

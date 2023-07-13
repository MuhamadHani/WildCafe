import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { cart } from '../shared/models/cart';
import { CartItem  } from "../shared/models/cartItem";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<cart> = new BehaviorSubject(this.cart);

  constructor() {}
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id == food.id);
    if (cartItem) return;
    // this.cart.items.push(new cartItem(food));
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage()
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
    this.setCartToLocalStorage()

  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage()

  }

  clearCart() {
    this.cart = new cart();
    this.setCartToLocalStorage()

  }

  getCartObservable(): Observable<cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {

    // sum of price
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price, 0);

      //sum of quantity
      this.cart.totalCount = this.cart.items
      .reduce((prevSum,currentItem)=>prevSum + currentItem.quantity, 0 )

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart)
  }

   private getCartFromLocalStorage():cart {
     const cartJson = localStorage.getItem('Cart')
     return cartJson? JSON.parse(cartJson): new cart()
  }
   }

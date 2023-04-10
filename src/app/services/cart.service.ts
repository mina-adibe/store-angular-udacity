import { Injectable } from '@angular/core';
import { Product, User } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  user: User = {
    name: '',
    address: '',
    creditCard: '',
  };

  constructor() {}

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  addToCart(product: Product) {
    const index = this.cart.findIndex((p) => p.id === product.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));

    if (index !== -1) {
      this.cart[index].amount += product.amount;
    } else {
      this.cart.push(product);
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  removeProductFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
  }

  getTotalPrice() {
    let total = 0;
    this.cart.forEach((product) => {
      total += product.price * product.amount;
    });

    return total;
  }

  getAmount() {
    let amount = 0;
    this.cart.forEach((product) => {
      amount += product.amount;
    });
    return amount;
  }

  getCartLength() {
    return this.cart.length;
  }

  getCartById(id: number) {
    return this.cart.find((product) => product.id === id);
  }

  updateCart(product: Product) {
    const index = this.cart.findIndex((p) => p.id === product.id);
    this.cart[index].amount = product.amount;
  }
}

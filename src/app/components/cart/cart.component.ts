import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  cartItmes: Product[] = [];

  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private service: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItmes = this.service.getCart();
    this.totalPrice = this.service.getTotalPrice();
  }
  removeProductFromCart(product: Product) {
    this.service.removeProductFromCart(product);
    this.updateCart();
  }

  handleUpdateProductAmount(product: Product) {
    this.service.updateCart(product);
    this.updateCart();
  }
  updateCart() {
    this.cartItmes = this.service.getCart();
    this.totalPrice = this.service.getTotalPrice();
  }

  checkout(): void {
    if (this.totalPrice < 1) {
      alert('Please add items to your cart');
    } else {
      this.service.setUser({
        name: this.fullName,
        address: this.address,
        creditCard: this.creditCard,
      });
      alert('Your order has been placed');
      this.router.navigate(['/confirm']);
    }
  }
}

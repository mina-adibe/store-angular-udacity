import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.models';
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
  myForm: FormGroup;

  constructor(private service: CartService, private router: Router) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      creditCard: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  ngOnInit(): void {
    this.cartItmes = this.service.getCart();
    this.totalPrice = this.service.getTotalPrice();

    // update cart form user input
    this.myForm.valueChanges.subscribe((formValue) => {
      this.service.setUser({ ...formValue });
    });
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
      alert('Your order has been placed');

      this.router.navigate(['/confirm']);
    }
  }
}

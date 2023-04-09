import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.models';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  cartItmes: Product[] = [];
  myForm: FormGroup;

  constructor(private service: CartService) {
    this.myForm = new FormGroup({
      productAmount: new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.cartItmes = this.service.getCart();
    this.totalPrice = this.service.getTotalPrice();
  }
  removeProductFromCart(product: Product) {
    this.service.removeProductFromCart(product);
    this.cartItmes = this.service.getCart();
    this.totalPrice = this.service.getTotalPrice();
  }

  handleUpdateProductAmount(product: Product) {
    this.service.updateCart(product);
    this.cartItmes = this.service.getCart();
    this.totalPrice = this.service.getTotalPrice();
  }

  checkout() {
    console.log('checkout');
  }
}

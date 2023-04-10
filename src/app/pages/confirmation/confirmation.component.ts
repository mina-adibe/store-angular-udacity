import { Component } from '@angular/core';
import { Product, User } from '../../models/product.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  cart: Product[] = [];
  user: User = {
    name: '',
    address: '',
    creditCard: '',
  };
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.user = this.cartService.getUser();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  ngOnDestroy(): void {
    this.cartService.clearCart();
  }
}

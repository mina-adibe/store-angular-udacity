import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-card-selector',
  templateUrl: './add-card-selector.component.html',
  styleUrls: ['./add-card-selector.component.scss'],
})
export class AddCardSelectorComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    amount: 0,
  };
  productAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  handleSelectedAmount(amountValue: number) {
    this.product.amount = amountValue;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

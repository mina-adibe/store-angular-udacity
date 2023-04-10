import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  myForm: FormGroup;

  constructor(private cartService: CartService) {
    this.myForm = new FormGroup({
      productAmount: new FormControl(),
    });
  }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.product.amount = Number(this.myForm.value.productAmount);
    this.cartService.addToCart(product);
  }
}

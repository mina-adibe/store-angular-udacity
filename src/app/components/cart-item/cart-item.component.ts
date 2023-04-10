import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.models';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    amount: 0,
  };
  @Output() removeProduct: EventEmitter<Product> = new EventEmitter();
  @Output() updateProductAmount: EventEmitter<Product> = new EventEmitter();

  myForm: FormGroup;

  constructor(private service: CartService) {
    this.myForm = new FormGroup({
      productAmount: new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.myForm.get('productAmount')?.setValue(this.product.amount);
    this.myForm.valueChanges.subscribe((data) => {
      this.updateProductAmount.emit({
        ...this.product,
        amount: data.productAmount,
      });
    });
  }
  removeProductFromCart(product: Product) {
    this.removeProduct.emit(product);
  }
}

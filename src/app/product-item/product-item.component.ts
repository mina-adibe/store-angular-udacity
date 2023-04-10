import { Component, Input } from '@angular/core';
import { Product } from '../models/product.models';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    amount: 0,
  };
  // myForm: FormGroup;

  constructor() {}
}

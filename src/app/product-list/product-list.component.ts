import { Product } from '../models/product.models';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}

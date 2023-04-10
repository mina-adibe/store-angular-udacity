import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss'],
})
export class ProductItemDetailComponent implements OnInit {
  addToCart(arg0: Product) {
    throw new Error('Method not implemented.');
  }
  product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(productId) || typeof productId !== 'number' || productId < 0) {
      this.router.navigate(['/404']);
    } else {
      this.getProductByID(productId);
    }
  }

  getProductByID(id: number) {
    this.service.getProductByID(id).subscribe({
      next: (product) => (this.product = product),
      error: (err) => console.log(err),
    });
  }
}

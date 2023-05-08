import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../shared/product-list.service';
import { IProduct } from '../types';

@Component({
  selector: 'pm-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService: ProductListService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productListService
      .getProductById(id)
      .subscribe((product) => (this.product = product));
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}

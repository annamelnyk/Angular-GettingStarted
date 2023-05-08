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
  ) {
    console.log();
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.productListService
      .getProductList()
      .subscribe(
        (data: IProduct[]) =>
          (this.product = data.find((item: IProduct) => item.productId === id))
      );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}

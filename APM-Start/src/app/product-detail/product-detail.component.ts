import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from '../types';

@Component({
  selector: '[pm-product-detail]',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() showImage!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

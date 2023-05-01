import { Component, OnInit } from '@angular/core';

import { IProduct } from '../types';
import data from '../../api/products/products.json';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  productList: IProduct[] = [];
  isImageShown: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log(data);
    this.productList = data;
  }

  toggleShowImage(): void {
    this.isImageShown = !this.isImageShown;
  }
}

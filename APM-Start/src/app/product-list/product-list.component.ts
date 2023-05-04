import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { IProduct } from '../types';
import data from '../../api/products/products.json';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../app.component.css', './product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  pageTitle: string = 'Product List';
  productList: IProduct[] = [];
  isImageShown: boolean = true;
  filteredProduct: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log(data);
    this.productList = data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes ', changes);
  }

  toggleShowImage(): void {
    this.isImageShown = !this.isImageShown;
  }

  filterProductsByName(event: any) {
    console.log(event.target.value);
    this.filteredProduct = event.target.value;

    if (this.filteredProduct) {
      this.productList = this.productList.filter((product: IProduct) =>
        product.productName
          .toLocaleLowerCase()
          .includes(this.filteredProduct.toLocaleLowerCase())
      );
    } else {
      this.productList = data;
    }
  }
}

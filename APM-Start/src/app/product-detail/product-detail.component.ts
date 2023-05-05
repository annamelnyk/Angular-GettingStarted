import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../types';

@Component({
  selector: '[pm-product-detail]',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() showImage!: boolean;
  @Output() ratingShow: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onNotify(message: string): void {
    console.log(message);
    this.ratingShow.emit(message);
  }

}

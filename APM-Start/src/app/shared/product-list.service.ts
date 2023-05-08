import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IProduct } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private url: string = '../../api/products/products.json';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return this.getProductList().pipe(
      map((productList: IProduct[]) =>
        productList.find((item: IProduct) => item.productId === id)
      )
    );
  }
}

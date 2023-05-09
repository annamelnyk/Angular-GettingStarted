import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space.pipe';
import { ProductViewGuard } from './product-view/product-view.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductViewComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductViewGuard],
        component: ProductViewComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
